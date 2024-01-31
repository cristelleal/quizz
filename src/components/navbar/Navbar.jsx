import './navbar.css';
import user from '../../assets/user.png';

function Navbar() {
  return (
    <>
      <header>
        <div className="nav">
          <img src={user} alt="user icon" className='user-img' />
        </div>
      </header>
    </>
  );
}

export default Navbar;
