import { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase.config';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    if (storedName) {
      setName(storedName); 
    }
  }, []);

  return (
    <>
      <div className="container">
        <div className="main-title">
          <img src={redcross} alt="medical cross icon" className="cross-img" />
          <h1>Quizz - Gestes de secours</h1>
        </div>
        <div className="title-infos">
          <span>Espace personnel</span>
          <p>Bienvenue {name} ! Tu retrouveras dans cet espace tes scores et les quizz disponibles afin de tester tes compétences.</p> 
        </div>
        <div>
          <div className='user-score'>
            <img src={trophy} alt="trophy icon" className='trophy-img'/>
            <p>Quizz réalisés</p>
          </div>
        </div>
        <Link to="/quizz">
          <button className="submit-btn">
            <span>Quizz numéro 1</span>
            <svg width="15px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </button>
        </Link>
        <button className="logout" onClick={handleSignOut}>
          Se déconnecter
        </button>
      </div>
    </>
  );
}

export default UserAccount;
