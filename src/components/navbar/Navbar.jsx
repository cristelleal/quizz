import { useNavigate } from 'react-router-dom';
import userImg from '../../assets/user.png';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.config';
import './navbar.css';

function Navbar() {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const handleClick = () => {
    if (user) {
      navigate('/userAccount');
    } else {
      navigate('/');
    }
  };

  if (loading) {
    return null;
  }

  return (
    <>
      <header>
        <div className='nav' onClick={handleClick}>
          <img src={userImg} alt='user icon' className='user-img' />
        </div>
      </header>
    </>
  );
}

export default Navbar;
