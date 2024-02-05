import {
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import handleFirebaseError from '../../firebase/handleFirebaseError';
import { validateEmail, validatePassword } from '../../utils/utils';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../form/form';
import Navbar from '../navbar/Navbar';
import redcross from '../../assets/redcross.png';
import './auth.css';

function Auth() {
  const errorMessage = '';
  const navigate = useNavigate();

  const handleSignIn = async (email, password) => {
    if (!validateEmail(email)) {
      return 'Veuillez remplir l\'adresse e-mail correctement';
    }
    if (!validatePassword(password)) {
       return 'Le mot de passe est invalide';
    }
    try {
      const authInstance = getAuth();
      await setPersistence(authInstance, browserSessionPersistence);
      await signInWithEmailAndPassword(authInstance, email, password);
      navigate('/userAccount');
    } catch (error) {
      return handleFirebaseError(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='main-title'>
          <img src={redcross} alt='medical cross icon' className='cross-img' />
          <h1>Quizz - Gestes de secours</h1>
        </div>
        <div className='title-infos'>
          <p>
            Face aux urgences quotidiennes, les gestes de secours peuvent sauver
            des vies. Savez-vous comment agir, rassurer la victime et qui
            contacter ?
          </p>
          <br />
          <span>Évaluez vos compétences en secourisme dès maintenant ! </span>
        </div>
        <Form
          handleFormSubmit={handleSignIn}
          setFormErrorMessage={errorMessage}
          buttonText='Se connecter'
        />
        <Link to='/signup'>
          <span>Créér un compte</span>
        </Link>
      </div>
    </>
  );
}

export default Auth;
