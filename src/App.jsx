import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/auth/Auth';
import SignUp from './components/auth/SignUp';
import UserAccount from './components/userAccount/UserAccount'; 
import Quizz from './components/quizz/Quizz';
import Error from './components/error/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userAccount" element={<UserAccount />} /> 
        <Route path="/" element={<Auth />} />
        <Route path='/quizz' element={<Quizz />} />
        <Route path='*' element={<Error />} /> 
      </Routes>
    </Router>
  );
}

export default App;