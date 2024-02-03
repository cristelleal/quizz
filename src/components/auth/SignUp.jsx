import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore'; 
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import redcross from '../../assets/redcross.png';
import './auth.css';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignUp = async (event) => {
    event.preventDefault();

    try {
      const authInstance = getAuth();
      await setPersistence(authInstance, browserSessionPersistence);      
      const userCredential = await createUserWithEmailAndPassword(
        authInstance,
        email,
        password
      );
      const userRef = doc(db, 'users', userCredential.user.uid); 
      await setDoc(
        userRef,
        {
          uid: userCredential.user.uid,
          quizzCount: 0,
          name: name,
        },
        { merge: true }
      ); 
      navigate('/userAccount');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(
        'Erreur lors de la création du compte : Veuillez réessayer'
      );
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authInstance = getAuth();
        await setPersistence(authInstance, browserSessionPersistence);
      } catch (error) {
        console.error('Error :', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-title">
          <img src={redcross} alt="medical cross icon" className="cross-img" />
          <h1>Quizz - Gestes de secours</h1>
        </div>
        <div className="title-infos">
          <span>Créer un compte</span>
          <br />
          <br />
          <p>
            Remplissez les champs ci-dessous afin de créer votre espace
            personnel
          </p>
        </div>
        <form>
          <input
            type="text"
            placeholder="Pseudo"
            value={name}
            onChange={handleNameChange}
            className="form-input"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className="form-input"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
            className="form-input"
          />
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <button className="submit-btn" onClick={handleSignUp}>
            <span>Valider</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
