import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/auth/Auth';
import SignUp from './components/auth/SignUp';
import UserAccount from './components/userAccount/UserAccount'; 
import Quizz from './components/quizz/Quizz';
import { data } from './assets/data/data';
import { data2 } from './assets/data/data2';
import QuizzList from './components/quizzlist/QuizzList';
import Error from './components/error/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userAccount" element={<UserAccount />} /> 
        <Route path="/" element={<Auth />} />
        <Route path='quizzList' element={<QuizzList />} />
        <Route path='/quizz' element={<Quizz quizzData={data} title='Quiz #1' />} />
        <Route path='/quizz2' element={<Quizz quizzData={data2} title='Quiz #2' />} />
        <Route path='*' element={<Error />} /> 
      </Routes>
    </Router>
  );
}

export default App;