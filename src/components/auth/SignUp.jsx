import { useState, useEffect } from 'react';
import { db } from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore'; 
import { useNavigate } from 'react-router-dom';
import handleFirebaseError from '../../firebase/handleFirebaseError';
import { validateName, validateEmail, validatePassword } from '../../utils/utils';
import Form from '../form/Form';
import Navbar from '../navbar/Navbar';
import redcross from '../../assets/redcross.png';
import './auth.css';
import Input from '../input/input';

function SignUp() {
  const [name, setName] = useState('');
  const errorMessage = '';
  const navigate = useNavigate();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSignUp = async (email, password) => {
    if (!validateName(name)) {
      return 'Veuillez remplir un nom valide (3 à 16 caractères)';
    }
    if (!validateEmail(email)) {
      return 'Veuillez remplir l\'adresse e-mail correctement';
    }
    if (!validatePassword(password)) {
       return 'Le mot de passe est invalide';
    }
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
      return handleFirebaseError(error);   
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
        <Input
          type="text"
          placeholder="Pseudo"
          value={name}
          onChange={handleNameChange}
        />
        <Form 
          handleFormSubmit={handleSignUp} 
          setFormErrorMessage={errorMessage} 
          buttonText='Valider' 
        />
      </div>
    </>
  );
}

export default SignUp;
