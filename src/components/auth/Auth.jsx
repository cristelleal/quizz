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
import backgroundImage from '../../assets/ambulance.jpg';
import icon from '../../assets/redcross.png';
import './auth.css';

function Auth() {
  const errorMessage = '';
  const navigate = useNavigate();

  const handleSignIn = async (email, password) => {
    if (!validateEmail(email)) {
      return "Veuillez remplir l'adresse e-mail correctement";
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
      <section className='bg-white'>
        <div className='lg:grid lg:min-h-screen lg:grid-cols-12'>
          <section className='relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6'>
            <img
              alt='Night'
              src={backgroundImage}
              className='absolute inset-0 h-full w-full object-cover opacity-80'
            />

            <div className='hidden lg:relative lg:block lg:p-12 lg:mb-8'>
              <div className='lg:flex lg:flex-row'>
                <img
                  src={icon}
                  height={50}
                  width={60}
                  alt='medical icon'
                  className='mr-4'
                />
                <h2 className='mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl'>
                  QUIZ - GESTES DE SECOURS
                </h2>
              </div>

              <p className='mt-4 leading-relaxed text-white/90'>
                Face aux urgences quotidiennes, les gestes de secours peuvent
                sauver des vies. Savez-vous comment agir, rassurer la victime et
                qui contacter ?
              </p>
            </div>
          </section>

          <main className='flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6'>
            <div className='max-w-xl lg:max-w-3xl'>
              <div className='relative -mt-16 block lg:hidden'>
                <h1 className='mt-16 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl'>
                  QUIZ - GESTES DE SECOURS
                </h1>

                <p className='mt-8 leading-relaxed text-gray-500'>
                  Face aux urgences quotidiennes, les gestes de secours peuvent
                  sauver des vies. Savez-vous comment agir, rassurer la victime
                  et qui contacter ?
                </p>
              </div>
              <Form
                handleFormSubmit={handleSignIn}
                setFormErrorMessage={errorMessage}
                buttonText='Se connecter'
              />
              <Link to='/signup'>
                <p className='mt-4 text-sm text-gray-500 text-center sm:mt-4'>
                  <span className='text-gray-700 underline'>
                    Créér un compte
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

export default Auth;
