import PropTypes from 'prop-types';
import { useState } from 'react';
import Input from '../input/input';
import Button from '../button/Button';

function Form({ handleFormSubmit, formErrorMessage, buttonText }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(formErrorMessage);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const error = await handleFormSubmit(email, password);
    if (error) {
      setErrorMessage(error);
    }
  };

  return (
    <form>
      <Input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type='password'
        placeholder='Mot de passe'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p className='error-message'>{errorMessage}</p>}
      <Button buttonText={buttonText} handleClick={handleSubmit} />
    </form>
  );
}

Form.propTypes = {
  handleFormSubmit: PropTypes.func.isRequired,
  formErrorMessage: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
};

export default Form;
