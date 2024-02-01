import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth, db } from '../../firebase/firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import redcross from '../../assets/redcross.png';
import trophy from '../../assets/trophy.png';
import '../auth/auth.css';
import './userAccount.css';

function UserAccount() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate('/');
      localStorage.removeItem('name');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const [name, setName] = useState('');
  const [quizzCount, setQuizzCount] = useState(0);

  const fetchUserData = async () => {
    if (auth.currentUser) {
      const docRef = doc(db, 'users', auth.currentUser.uid);
      try {
        const docSnap = await getDoc(docRef);
  
        if (docSnap.exists()) {
          setName(docSnap.data().name);
          setQuizzCount(docSnap.data().quizzCount);
          console.log('User data fetched successfully');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    } 
  };
  
  useEffect(() => {
    fetchUserData();
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
          <span>Espace personnel</span>
          <br />
          <br />
          <p>
            Bienvenue {name} !
            <br />
            Vous retrouverez dans cet espace vos quizz et vos scores
          </p>
        </div>
        <div className="content">
          <div className="user-score">
            <img src={trophy} alt="trophy icon" className="trophy-img" />
            <p>{quizzCount} Quizz réalisé(s)</p>
          </div>
        </div>
        <div className="quizz-btn-container">
          <Link to="/quizz" className="quizz-btn">
            <span>
              Quizz numéro 1 <br />
              Les gestes d&lsquo;urgences
            </span>
          </Link>
        </div>
        <button className="logout" onClick={handleSignOut}>
          Se déconnecter
        </button>
      </div>
    </>
  );
}

export default UserAccount;
