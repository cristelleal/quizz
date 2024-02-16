import { useNavigate, Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.config';
import { signOut, getAuth } from 'firebase/auth';
import logout from '../../assets/img/logout.png';
import '../navbar/navbar.css';

function Navbar() {
  const navigate = useNavigate();
  const handleSignOut = async () => {
    try {
      getAuth();
      await signOut(auth);
      navigate('/');
      localStorage.removeItem('name');
    } catch (error) {
      throw new Error('Logout error:', error);
    }
  };
  const [user, loading] = useAuthState(auth);

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
      <header className='bg-white shadow-sm border border-gray-100'>
        <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
          <Link to='/quizzlist'>
            <div className='block text-red-500'>
              <span className='sr-only'>Home</span>
              <svg
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.9258 4.00829C11.8753 3.95418 11.8237 3.90074 11.7709 3.848C9.30834 1.3854 5.31407 1.3838 2.84949 3.84442C1.06495 5.62609 0.571708 8.21013 1.37022 10.4353H6.19433L7.68207 7.01132C7.98115 6.32299 8.93658 6.32299 9.23566 7.01132L12.062 13.5162L13.3987 10.8555L14.307 8.99742C14.6202 8.35669 15.5144 8.35669 15.8276 8.99742L16.5305 10.4353H22.6298C23.4283 8.21013 22.935 5.62609 21.1505 3.84442C18.6859 1.3838 14.6917 1.3854 12.2291 3.848C12.1763 3.90074 12.1247 3.95418 12.0742 4.00829C12.0339 4.05153 11.9661 4.05153 11.9258 4.00829Z'
                  fill='currentColor'
                />
                <path
                  d='M21.8248 11.969H16.1287C15.8067 11.969 15.5123 11.783 15.3684 11.4885L15.0673 10.8726L14.7386 11.545L14.7348 11.5526L12.7756 15.4524C12.4493 16.1018 11.5326 16.0754 11.2427 15.4081L8.45887 9.00113L7.39361 11.4528C7.25721 11.7667 6.95278 11.969 6.61682 11.969H2.17524C2.37367 12.2457 2.59722 12.51 2.8459 12.7587L11.2807 21.6879C11.6738 22.1041 12.3261 22.104 12.7193 21.6878L21.1457 12.767L21.1541 12.7587C21.4028 12.51 21.6263 12.2457 21.8248 11.969Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          </Link>
          <div className='flex flex-1 items-center justify-end md:justify-between'>
            <nav aria-label='Global' className='hidden md:block'></nav>
            <div className='flex items-center gap-2'>
              <div className='sm:flex sm:gap-'>
                <div
                  className='block rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 cursor-pointer'
                  onClick={handleClick}
                >
                  Mon compte
                </div>
              </div>
              <div
                onClick={handleSignOut}
                className='block rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700 cursor-pointer'
              >
                <img src={logout} alt='logout icon' className='logout-icon' />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
