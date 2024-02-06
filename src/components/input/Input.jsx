import PropTypes from 'prop-types';

function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      className='mt-4 mb-4 w-full rounded-md border-gray-300 bg-white text-sm text-gray-700 shadow-sm px-2 py-3 focus:border-indigo-500 focus:ring-indigo-500'
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;
