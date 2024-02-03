import { useState } from 'react';
import {
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Input from '../input/input';

function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      const authInstance = getAuth();
      await setPersistence(authInstance, browserSessionPersistence);
      console.log('Persistance configurée avec succès');
      await signInWithEmailAndPassword(authInstance, email, password);
      navigate('/userAccount');
    } catch (error) {
      console.error('Error:', error);
      setErrorMessage(
        'Erreur de connexion : Vérifiez vos identifiants ou procédez à votre inscription'
      );
    }
  };

  return (
    <>
      <form>
        <Input
          type='email'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type='password'
          placeholder='Mot de passe'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className='error-message'>{errorMessage}</p>}
        <button className='submit-btn' onClick={handleSignIn}>
          <span>Se connecter</span>
          <svg width='15px' height='10px' viewBox='0 0 13 10'>
            <path d='M1,5 L11,5'></path>
            <polyline points='8 1 12 5 8 9'></polyline>
          </svg>
        </button>
        <Link to='/signup' className='sign-in-btn'>
          <span className='signup'>Créer un compte</span>
        </Link>
      </form>
    </>
  );
}

export default Form;
