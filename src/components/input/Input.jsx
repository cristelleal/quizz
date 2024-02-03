import PropTypes from 'prop-types';

function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      className='form-input'
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
