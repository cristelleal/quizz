import PropTypes from 'prop-types';

function Button({ buttonText, handleClick }) {
  return (
    <div className='col-span-6 sm:flex sm:items-center sm:gap-4 mt-4 mb-4'>
      <button
        className='inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500'
        onClick={handleClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
