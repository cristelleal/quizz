import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/auth/Auth';
import SignUp from './components/auth/SignUp';
import UserAccount from './components/userAccount/UserAccount'; 
import Quizz from './components/quizz/Quizz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userAccount" element={<UserAccount />} /> 
        <Route path="/" element={<Auth />} />
        <Route path='/quizz' element={<Quizz />} />
      </Routes>
    </Router>
  );
}

export default App;
