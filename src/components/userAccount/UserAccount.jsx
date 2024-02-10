import { useState, useEffect } from 'react';
import {
  signOut,
  setPersistence,
  browserSessionPersistence,
  getAuth,
} from 'firebase/auth';
import { auth, db } from '../../firebase/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { formatQuizCount } from '../../utils/utils';
import Navbar from '../navbar/Navbar';
import FooterElement from '../footerElement/FooterElement';
import AuthChecker from '../authChecker/authChecker';
import Wave from '../wave/Wave';
import './userAccount.css';

function UserAccount() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      getAuth();
      await signOut(auth);
      navigate('/');
      localStorage.removeItem('name');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const [name, setName] = useState('');
  const [quizzCount, setQuizzCount] = useState(0);
  const [averageScore, setAverageScore] = useState(0);

  const fetchUserData = async () => {
    if (auth.currentUser) {
      const docRef = doc(db, 'users', auth.currentUser.uid);
      try {
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const userData = docSnap.data();
          setName(userData.name);
          setQuizzCount(userData.quizzCount);
          const totalScore = userData.quizzScores.reduce((a, b) => a + b, 0);
          setAverageScore(Math.round(totalScore / userData.quizzCount));
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const authInstance = getAuth();
        await setPersistence(authInstance, browserSessionPersistence);
        await fetchUserData();
      } catch (error) {
        console.error('Error persistance user data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <AuthChecker>
        <Navbar />
        <section className='bg-white mt-12'>
          <div className='mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8'>
            <div className='mx-auto max-w-3xl text-center'>
              <h2 className='text-2xl font-bold text-gray-900 sm:text-4xl'>
                Bienvenue {name}
              </h2>
              <p className='mt-4 text-gray-500 sm:text-l'>
                Ceci est votre espace personnel. Vous y retrouverez les quiz
                disponibles et l&apos;évolution de vos scores.
              </p>
            </div>

            <div className='mt-8 sm:mt-12'>
              <dl className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                <div className='flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center flex justify-center align-center'>
                  <dt className='order-last text-lg font-medium text-gray-500'>
                    <Link to='/quizzList' className='quizz-btn'>
                      <span className='underline'>Cliquez ici pour jouer</span>
                    </Link>
                  </dt>
                  <dd className='text-3xl font-extrabold text-red-500 md:text-5xl'>
                    Quiz
                  </dd>
                </div>

                <div className='flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center'>
                  <dt className='order-last text-lg font-medium text-gray-500'>
                    Score total
                  </dt>
                  <dd className='text-3xl font-extrabold text-red-500 md:text-5xl flex justify-center align-center'>
                    <CircularProgressbar
                      styles={buildStyles({
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        textColor: '#EF4444',
                        pathColor: `#EF4444`,
                      })}
                      className='circular-progress-bar'
                      value={averageScore}
                      text={`${averageScore}%`}
                    />
                  </dd>
                </div>

                <div className='flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center flex justify-center align-center'>
                  <dt className='order-last text-lg font-medium text-gray-500'>
                    {formatQuizCount(quizzCount)}
                  </dt>
                  <dd className='text-3xl font-extrabold text-red-500 md:text-5xl'>
                    {quizzCount}
                  </dd>
                </div>
              </dl>
            </div>

            <div className='flex justify-center mt-12 mb-12 cursor-pointer'>
              <a
                onClick={handleSignOut}
                className='mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'
              >
                Se déconnecter
              </a>
            </div>
          </div>
        </section>
        <Wave />
        <FooterElement />
      </AuthChecker>
    </>
  );
}

export default UserAccount;
