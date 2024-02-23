import { currentYear } from '../../utils/utils';

function FooterElement() {
  return (
    <>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 1440 320'
        className='inset-px mt-auto'
      >
        <path
          fill='#FEF2F2'
          fillOpacity='1'
          d='M0,160L60,144C120,128,240,96,360,85.3C480,75,600,85,720,112C840,139,960,181,1080,181.3C1200,181,1320,139,1380,117.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z'
        ></path>
      </svg>
      <footer className='bottom-0 bg-red-50 w-full'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
          <div className='sm:flex sm:items-center sm:justify-between'>
            <div className='flex justify-center text-gray-400 sm:justify-start'>
              <svg
                width='25'
                height='25'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1.70479 11.2022H6.61682C6.65634 11.2022 6.69216 11.1784 6.70821 11.1415L8.36748 7.32266C8.40266 7.24168 8.51507 7.24168 8.55025 7.32266L11.9281 15.0968C11.9622 15.1753 12.0701 15.1784 12.1085 15.102L14.0677 11.2022L14.9778 9.34026C15.0147 9.26488 15.1199 9.26488 15.1567 9.34026L16.0393 11.1457C16.0562 11.1803 16.0908 11.2022 16.1287 11.2022H22.2952M11.7709 3.848C11.8237 3.90074 11.8753 3.95418 11.9258 4.00829C11.9661 4.05153 12.0339 4.05153 12.0742 4.00829C12.1247 3.95418 12.1763 3.90074 12.2291 3.848C14.6917 1.3854 18.6859 1.3838 21.1505 3.84442C23.6151 6.30505 23.6167 10.2961 21.1541 12.7587C21.1513 12.7615 21.1485 12.7643 21.1457 12.767L12.7193 21.6878C12.3261 22.104 11.6738 22.1041 11.2807 21.6879L2.8459 12.7587C0.383301 10.2961 0.384905 6.30505 2.84949 3.84442C5.31407 1.3838 9.30834 1.3854 11.7709 3.848Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
              </svg>
            </div>

            <p className='mt-4 text-center text-sm text-gray-400 lg:mt-0 lg:text-right'>
              Rescue Quiz &copy; {currentYear}. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterElement;
