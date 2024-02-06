function Footer() {
  return (
    <footer className='bg-teal-50'>
      <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='flex justify-center text-teal-600 sm:justify-start'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clipPath='url(#clip0_1413_13248)'>
                <path
                  d='M3.96425 5.95965V5.9913M19.9276 17.9322V17.9638M7.95509 5.95965V5.9913M15.9368 17.9322V17.9638M21.5323 21.5323C19.5841 23.4804 16.4124 23.4936 14.4642 21.5455L2.45455 9.53575C0.506398 7.5876 0.51956 4.41586 2.46771 2.46771C4.41586 0.519561 7.5876 0.506397 9.53575 2.45455L21.5454 14.4642C23.4936 16.4124 23.4804 19.5841 21.5323 21.5323ZM5.95967 13.0144L13.0145 5.95957L17.8157 10.7607L10.7608 17.8156L5.95967 13.0144Z'
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_1413_13248'>
                  <rect width='24' height='24' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>

          <p className='mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right'>
            Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
