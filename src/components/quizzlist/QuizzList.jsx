import Navbar from '../navbar/Navbar';
import FooterElement from '../footerElement/FooterElement';
import AuthChecker from '../authChecker/authChecker';
import { Link } from 'react-router-dom';

function QuizzList() {
  return (
    <>
      <AuthChecker>
        <Navbar />
        <section className='bg-white mt-12 mb-12 w-full'>
          <div className='max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
            <div className='grid grid-cols-1 gap-y-8 lg:grid-cols-2 lg:items-center lg:gap-x-16'>
              <div className='mx-auto max-w-lg text-center lg:mx-0 ltr:lg:text-left rtl:lg:text-right'>
                <h2 className='text-3xl font-bold sm:text-4xl'>Rescue Quiz</h2>

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
                        stroke='currentColor'
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
                        stroke='currentColor'
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

                <div className='block rounded-xl border border-gray-100 p-4 shadow-sm hover:border-gray-200 hover:ring-1 hover:ring-gray-200 focus:outline-none focus:ring'>
                  <span className='inline-block rounded-lg bg-gray-50 p-3'>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke='currentColor'
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
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#FEF2F2'
            fillOpacity='1'
            d='M0,160L60,144C120,128,240,96,360,85.3C480,75,600,85,720,112C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
          ></path>
        </svg>
        <div className='bottom-0 w-full'>
          <FooterElement />
        </div>
      </AuthChecker>
    </>
  );
}

export default QuizzList;
