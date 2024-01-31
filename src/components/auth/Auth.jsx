import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import redcross from '../../assets/redcross.png';
import './auth.css';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/userAccount');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(
        'Erreur de connexion : Veuillez vérifier vos identifiants ou procéder à votre inscription'
      );
    }
  };

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="main-title">
        <img src={redcross} alt="medical cross icon" className="cross-img" />
        <h1>Quizz - Gestes de secours</h1>
      </div>
      <div className="title-infos">
        <p>
          Face aux urgences quotidiennes, les gestes de secours peuvent sauver
          des vies. Savez-vous comment agir, rassurer la victime et qui
          contacter ?
        </p>
        <br />
        <span> Évaluez vos compétences en secourisme dès maintenant ! </span>
      </div>
      <form>
        <input
          type="email"
          className="form-input"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          className="form-input"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePasswordChange}
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button className="submit-btn" onClick={handleSignIn}>
          <span>Se connecter</span>
          <svg width="15px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </button>
        <Link to="/signup" className="sign-in-btn">
          <span className='signup'>Créer un compte</span>
        </Link>
      </form>
    </div>
    </>
  );
}

export default Auth;
