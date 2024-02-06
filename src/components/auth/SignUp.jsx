import { useState, useEffect } from 'react';
import {
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { db } from '../../firebase/firebase.config';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import handleFirebaseError from '../../firebase/handleFirebaseError';
import {
  validateName,
  validateEmail,
  validatePassword,
} from '../../utils/utils';
import Navbar from '../navbar/Navbar';
import Form from '../form/Form';
import Input from '../input/Input';
import backgroundImage from '../../assets/rescue.jpg';

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
      return "Veuillez remplir l'adresse e-mail correctement";
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
      <section className='bg-white'>
        <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
          <section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
            <img
              alt='Night'
              src={backgroundImage}
              className='absolute inset-0 h-full w-full object-cover opacity-80'
            />

            <div className='hidden lg:relative lg:block lg:p-12 lg:mb-8'>
              <h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
                QUIZ - GESTES DE SECOURS
              </h2>

              <p className='mt-4 leading-relaxed text-white/90'>
                Créez votre compte afin de tester vos connaissances et d&apos;accéder à vos scores
              </p>
            </div>
          </section>

          <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
            <div className='max-w-xl lg:max-w-3xl'>
              <div className='relative -mt-16 block lg:hidden'>
                <h1 className='mt-16 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
                  QUIZ - GESTES DE SECOURS
                </h1>

                <p className='mt-8 leading-relaxed text-gray-500 mb-12'>
                Créez votre compte afin de tester vos connaissances et d&apos;accéder à vos scores
                </p>
                </div>
                <label
                  htmlFor='Name'
                  className='block text-sm font-medium text-gray-700'
                >
                  Pseudo
                </label>
                  <Input
                    type='text'
                    placeholder=''
                    value={name}
                    onChange={handleNameChange}
                  />
                  <Form
                    handleFormSubmit={handleSignUp}
                    setFormErrorMessage={errorMessage}
                    buttonText='Valider'
                  />
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default SignUp;
