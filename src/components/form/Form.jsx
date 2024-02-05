import PropTypes from 'prop-types';
import { useState } from 'react';
import Input from '../input/Input';
import Button from '../button/Button';

function Form({ handleFormSubmit, setFormErrorMessage, buttonText }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const error = await handleFormSubmit(email, password);
    if (error) {
      setErrorMessage(error);
      setFormErrorMessage(error);
    }
  };

  return (
    <form className='mt-8 grid grid-cols-6 gap-6 py-12 px-12'>
      <div className='col-span-6 sm:col-span-3'>
          <label
            htmlFor='Email'
            className='block text-sm font-medium text-gray-700'
          >
            Email
          </label>
          <Input
            type='email'
            placeholder=''
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='col-span-6 sm:col-span-3'>
          <label
            htmlFor='Password'
            className='block text-sm font-medium text-gray-700'
          >
            Mot de passe
          </label>
          <Input
            type='password'
            placeholder=''
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='col-span-6 sm:col-span-'>
        {errorMessage && (
          <p className='text-red-500 text-xs italic'>{errorMessage}</p>
        )}
        </div>
        <Button buttonText={buttonText} handleClick={handleSubmit} />
    </form>
  );
}

Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  setFormErrorMessage: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default Form;
