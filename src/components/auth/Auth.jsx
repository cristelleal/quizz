import {
  signInWithEmailAndPassword,
  getAuth,
  setPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import handleFirebaseError from '../../firebase/handleFirebaseError';
import { validateEmail, validatePassword } from '../../utils/utils';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../form/Form';
import backgroundImage from '../../assets/img/ambulance.webp';

function Auth() {
  const errorMessage = '';
  const navigate = useNavigate();

  const handleSignIn = async (email, password) => {
    if (!validateEmail(email)) {
      return "Veuillez remplir l'adresse e-mail correctement";
    }
    if (!validatePassword(password)) {
      return 'Le mot de passe est invalide : Il doit contenir entre 6 et 20 caractères';
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
              Bienvenue sur votre plateforme de secourisme interactive !
              Relevez le défi : connectez-vous et apprenez en vous amusant. 
              Prêt à commencer ?              
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
                Explorez le secourisme avec des quiz interactifs. Relevez le défi : connectez-vous et apprenez en vous amusant. Prêt à commencer ?              
                </p>
              </div>
              <Form
                handleFormSubmit={handleSignIn}
                setFormErrorMessage={errorMessage}
                buttonText='Se connecter'
              />
              <Link to='/signup'>
                <p className='mt-12 text-sm text-gray-500 text-center sm:mt-4'>
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
