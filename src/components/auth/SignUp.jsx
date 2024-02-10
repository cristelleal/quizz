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
import { Link } from 'react-router-dom';
import Form from '../form/Form';
import Input from '../input/Input';
import backgroundImage from '../../assets/img/rescue.webp';

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
      return 'Le mot de passe est invalide : Il doit contenir entre 6 et 20 caractères';
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
      <section className='bg-white'>
        <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
          <section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
            <img
              alt='Night'
              src={backgroundImage}
              className='absolute inset-0 h-full w-full object-cover opacity-80'
            />

            <div className='hidden lg:relative lg:block lg:p-12 lg:mb-8'>
              <h2 className='mt-6 text-4xl font-black text-white text-center'>
                RESCUE QUIZ
              </h2>

              <p className='mt-4 leading-relaxed text-white/90'>
                Bienvenue ! Créez votre compte afin de tester vos connaissances en gestes de secours et
                d&apos;accéder à vos scores personnels. 
              </p>
            </div>
          </section>

          <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
            <div className='max-w-xl lg:max-w-3xl'>
              <div className='relative -mt-16 block lg:hidden'>
                <h1 className='mt-0 text-4xl font-extrabold text-white'>
                  RESCUE QUIZ
                </h1>

                <p className='mt-8 leading-relaxed text-gray-500 mb-12'>
                Bienvenue ! Créez votre compte afin de tester vos connaissances en gestes de secours et
                d&apos;accéder à vos scores personnels. 
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
              <Link to='/'>
                <p className='mt-12 text-sm text-gray-500 text-center sm:mt-4'>
                  <span className='text-gray-700 underline mr-4'>
                    S&apos;authentifier
                  </span>
                </p>
              </Link>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default SignUp;
