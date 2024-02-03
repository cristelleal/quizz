import Form from '../form/form';
import Navbar from '../navbar/Navbar';
import redcross from '../../assets/redcross.png';
import './auth.css';

function Auth() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='main-title'>
          <img src={redcross} alt='medical cross icon' className='cross-img' />
          <h1>Quizz - Gestes de secours</h1>
        </div>
        <div className='title-infos'>
          <p>
            Face aux urgences quotidiennes, les gestes de secours peuvent sauver
            des vies. Savez-vous comment agir, rassurer la victime et qui
            contacter ?
          </p>
          <br />
          <span>Évaluez vos compétences en secourisme dès maintenant ! </span>
        </div>
        <Form />
      </div>
    </>
  );
}

export default Auth;
