import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase.config';

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
      <header className='bg-white'>
        <div className='mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8'>
          <a className='block text-red-500' href='/quizzlist'>
            <span className='sr-only'>Home</span>
            <svg
              width='40'
              height='40'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M7.6 2.5V7.5C7.6 7.55523 7.55523 7.6 7.5 7.6H2.5C1.67157 7.6 0.999998 8.27157 1 9.1L1.00001 14.9C1.00001 15.7284 1.67158 16.4 2.50001 16.4H7.50001C7.55524 16.4 7.60001 16.4448 7.60001 16.5L7.6 21.5C7.6 22.3284 8.27157 23 9.1 23H14.9054C15.7338 23 16.4054 22.3284 16.4054 21.5L16.4054 16.4994C16.4054 16.4444 16.4498 16.3997 16.5048 16.3994L21.5092 16.3686C22.334 16.3636 23 15.6935 23 14.8687L23 9.06873C23 8.2367 22.3228 7.56364 21.4908 7.56876L16.506 7.59938C16.4505 7.59972 16.4054 7.55485 16.4054 7.49938V2.5C16.4054 1.67157 15.7338 1 14.9054 1H9.1C8.27157 1 7.6 1.67157 7.6 2.5Z'
                fill='currentColor'
              />
            </svg>
          </a>
          <div className='flex flex-1 items-center justify-end md:justify-between'>
            <nav aria-label='Global' className='hidden md:block'></nav>
            <div className='flex items-center gap-4'>
              <div className='sm:flex sm:gap-4'>
                <a
                  className='block rounded-md bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-600 cursor-pointer'
                  onClick={handleClick}
                >
                  Mon compte
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
