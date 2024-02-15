import { Link } from 'react-router-dom';
import backgroundImage from '../../assets/img/quiz-example.png';
import Button from '../button/Button';
import Wave from '../wave/Wave';
import FooterElement from '../footerElement/FooterElement';

function Home() {
  return (
    <div className='bg-white min-h-screen flex flex-col justify-start'>
      <section>
        <div className='max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8'>
          <div className='space-y-5 max-w-4xl mx-auto text-center'>
            <div className='flex justify-center items-center space-x-2'>
              <svg
                width='32'
                height='32'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2 sm:w-[45px] sm:h-[45px]'
              >
                <path
                  d='M1.70479 11.2022H6.61682C6.65634 11.2022 6.69216 11.1784 6.70821 11.1415L8.36748 7.32266C8.45266 7.24168 8.51507 7.24168 8.55025 7.32266L11.9281 15.0968C11.9622 15.1753 12.0701 15.1784 12.1085 15.102L14.0677 11.2022L14.9778 9.34026C15.0147 9.26488 15.1199 9.26488 15.1567 9.34026L16.0393 11.1457C16.0562 11.1803 16.0908 11.2022 16.1287 11.2022H22.2952M11.7709 3.848C11.8237 3.90074 11.8753 3.95418 11.9258 4.00829C11.9661 4.05153 12.0339 4.05153 12.0742 4.00829C12.1247 3.95418 12.1763 3.90074 12.2291 3.848C14.6917 1.3854 18.6859 1.3838 21.1505 3.84442C23.6151 6.30505 23.6167 10.2961 21.1541 12.7587C21.1513 12.7615 21.1485 12.7643 21.1457 12.767L12.7193 21.6878C12.3261 22.104 11.6738 22.1041 11.2807 21.6879L2.8459 12.7587C0.383301 10.2961 0.384905 6.30505 2.84949 3.84442C5.31407 1.3838 9.30834 1.3854 11.7709 3.848Z'
                  stroke='#EF4444'
                  strokeWidth='2'
                  strokeLinecap='round'
                />
              </svg>
              <h2 className='text-4xl text-gray-800 font-extrabold md:text-5xl'>
                RESCUE QUIZ
              </h2>
            </div>

            <p className='max-w-2xl mx-auto'>
              Explorez le secourisme avec des quiz interactifs. Relevez le défi
              : connectez-vous, testez vos connaissances et apprenez en vous
              amusant.
            </p>
            <div className='items-center justify-center gap-x-3 space-y-3 sm:flex sm:space-y-0'>
              <Link to='/auth'>
                <Button buttonText='Commencer' />
              </Link>
            </div>
          </div>
          <div className='mt-12 flex justify-center items-center'>
            <img
              src={backgroundImage}
              className='w-4/5 sm:w-1/3 shadow-lg rounded-lg border'
              style={{
                transform:
                  'scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)',
              }}
              alt='quiz question interface example'
            />
          </div>
        </div>
      </section>
      <Wave />
      <FooterElement />
    </div>
  );
}

export default Home;
