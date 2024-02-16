import FooterElement from '../footerElement/FooterElement';
import AuthChecker from '../authChecker/authChecker';
import { Link } from 'react-router-dom';
import Wave from '../wave/Wave';

function QuizzList() {
  return (
    <div className='min-h-screen flex flex-col justify-start'>
      <AuthChecker>
        <section className='bg-white mt-12 mb-12 w-full'>
          <div className='max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
            <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
              <div className='mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right'>
                <div className='flex justify-center items-center space-x-2'>
                  <svg
                    width='30'
                    height='30'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    className='sm:w-[35px] sm:h-[35px]'
                  >
                    <path
                      d='M1.70479 11.2022H6.61682C6.65634 11.2022 6.69216 11.1784 6.70821 11.1415L8.36748 7.32266C8.45266 7.24168 8.51507 7.24168 8.55025 7.32266L11.9281 15.0968C11.9622 15.1753 12.0701 15.1784 12.1085 15.102L14.0677 11.2022L14.9778 9.34026C15.0147 9.26488 15.1199 9.26488 15.1567 9.34026L16.0393 11.1457C16.0562 11.1803 16.0908 11.2022 16.1287 11.2022H22.2952M11.7709 3.848C11.8237 3.90074 11.8753 3.95418 11.9258 4.00829C11.9661 4.05153 12.0339 4.05153 12.0742 4.00829C12.1247 3.95418 12.1763 3.90074 12.2291 3.848C14.6917 1.3854 18.6859 1.3838 21.1505 3.84442C23.6151 6.30505 23.6167 10.2961 21.1541 12.7587C21.1513 12.7615 21.1485 12.7643 21.1457 12.767L12.7193 21.6878C12.3261 22.104 11.6738 22.1041 11.2807 21.6879L2.8459 12.7587C0.383301 10.2961 0.384905 6.30505 2.84949 3.84442C5.31407 1.3838 9.30834 1.3854 11.7709 3.848Z'
                      stroke='#EF4444'
                      strokeWidth='2'
                      strokeLinecap='round'
                    />
                  </svg>
                  <h2 className='text-3xl font-bold sm:text-4xl'>
                    RESCUE QUIZ
                  </h2>
                </div>

                <p className='mt-4 text-gray-600'>
                  Bienvenue sur votre plateforme de secourisme interactive !
                  <br />
                  Testez vos connaissances à travers des quiz variés, adaptés à
                  tous les niveaux. Suivez votre progression dans votre espace
                  personnel. Prêt à devenir un expert des gestes qui sauvent ?
                  Lancez-vous !
                </p>
                <Link to='/useraccount'>
                  <a className='mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400'>
                    Espace personnel
                  </a>
                </Link>
              </div>

              <div className='grid grid-cols-2 gap-4 sm:grid-cols-3'>
                <Link to='/quizz'>
                  <div className='block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'>
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        stroke='#EF4444'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                        <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                        ></path>
                      </svg>
                    </span>

                    <h2 className='mt-2 font-bold'>Quiz #1</h2>

                    <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      <b>14 questions</b>
                      <br />
                      Niveau : facile
                    </p>
                  </div>
                </Link>

                <Link to='/quizz2'>
                  <div className='block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'>
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        stroke='#EF4444'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                        <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                        ></path>
                      </svg>
                    </span>

                    <h2 className='mt-2 font-bold'>Quiz #2</h2>

                    <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      <b>8 questions</b>
                      <br />
                      Niveau : facile
                    </p>
                  </div>
                </Link>
                <Link to='/quizz3'>
                  <div className='block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'>
                    <span className='inline-block rounded-lg bg-gray-50 p-3'>
                      <svg
                        className='h-6 w-6'
                        fill='none'
                        stroke='#EF4444'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                        <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                        ></path>
                      </svg>
                    </span>

                    <h2 className='mt-2 font-bold'>Quiz #3</h2>

                    <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                      <b>10 questions</b>
                      <br />
                      Niveau : moyen
                    </p>
                  </div>
                </Link>

                <div className='block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'>
                  <span className='inline-block rounded-lg bg-gray-50 p-3'>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke='gray'
                      viewBox='0 0 24 24'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path d='M12 14l9-5-9-5-9 5 9 5z'></path>
                      <path d='M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'></path>
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
                      ></path>
                    </svg>
                  </span>

                  <h2 className='mt-2 font-bold'>Quiz #4</h2>

                  <p className='hidden sm:mt-1 sm:block sm:text-sm sm:text-gray-600'>
                    <b>
                      <i>Bientôt disponible</i>
                    </b>
                    <br />
                    Niveau : moyen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Wave />
        <FooterElement />
      </AuthChecker>
    </div>
  );
}

export default QuizzList;
