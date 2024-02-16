import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/auth/Auth';
import SignUp from './components/auth/SignUp';
import UserAccount from './components/userAccount/UserAccount';
import Quizz from './components/quizz/Quizz';
import { data } from './assets/data/data';
import { data2 } from './assets/data/data2';
import { data3 } from './assets/data/data3';
import QuizzList from './components/quizzlist/QuizzList';
import Error from './components/error/Error';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/useraccount' element={<UserAccount />} />
        <Route path='/' element={<Home />} />
        <Route path='quizzlist' element={<QuizzList />} />
        <Route
          path='/quizz'
          element={<Quizz quizzData={data} title='Quiz numéro 1' />}
        />
        <Route
          path='/quizz2'
          element={<Quizz quizzData={data2} title='Quiz numéro 2' />}
        />
        <Route
          path='/quizz3'
          element={<Quizz quizzData={data3} title='Quiz numéro 3' />}
        />
        <Route path='*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
