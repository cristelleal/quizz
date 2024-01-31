import { useRef, useState } from 'react';
import { db, auth } from '../../firebase/firebase.config';
import { updateDoc, increment, doc } from 'firebase/firestore';
import { data } from '../../assets/data';
import Navbar from '../../components/navbar/Navbar';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './quizz.css';

function Quizz() {
  let [index, setIndex] = useState(0);
  const [question, setQuestion] = useState(data[index]);
  const [lock, setLock] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState(false);

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);

  const optionArray = [option1, option2, option3];

  const checkAnswer = (element, answer) => {
    if (lock === false) {
      if (question.answer === answer) {
        element.target.classList.add('correct');
        setLock(true);
        setScore((prev) => prev + 1);
      } else {
        element.target.classList.add('wrong');
        setLock(true);
        optionArray[question.answer - 1].current.classList.add('correct');
      }
    }
  };

  const next = async () => {
    if (lock === true) {
      if (index === data.length - 1) {
        setResult(true);
        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, {
          quizzCount: increment(1),
        });
        return 0;
      }
      setIndex((index += 1));
      setQuestion(data[index]);
      setLock(false);
      optionArray.map((option) => {
        option.current.classList.remove('wrong');
        option.current.classList.remove('correct');
      });
    }
  };

  const reset = () => {
    setIndex(0);
    setQuestion(data[0]);
    setScore(0);
    setLock(false);
    setResult(false);
  };

  const calculateSuccessPercentage = () => {
    return Math.round((score / data.length) * 100);
  };

  const percentage = calculateSuccessPercentage();
  const isScoreAboveHalf = calculateSuccessPercentage() > 50;

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="title">
          <h1>Quizz - Gestes de secours</h1>
          <div className="loader"></div>
        </div>
        {result ? (
          <></>
        ) : (
          <>
            <h2>
              {index + 1}. {question.question}
            </h2>
            <ul>
              <li
                ref={option1}
                onClick={(element) => {
                  checkAnswer(element, 1);
                }}
              >
                {question.option1}
              </li>
              <li
                ref={option2}
                onClick={(element) => {
                  checkAnswer(element, 2);
                }}
              >
                {question.option2}
              </li>
              <li
                ref={option3}
                onClick={(element) => {
                  checkAnswer(element, 3);
                }}
              >
                {question.option3}
              </li>
            </ul>
            <button onClick={next} className="next-btn">
              <span>Suivant</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
            <div className="index">
              {index + 1} sur {data.length} questions
            </div>
          </>
        )}
        {result ? (
          <>
            <div className="percentage-box">
              <div className="percentage">
                <CircularProgressbar
                  value={percentage}
                  text={`${percentage}%`}
                />
              </div>
            </div>
            {isScoreAboveHalf ? (
              <div className="result-container">
                <p className="score-infos">
                  Félicitations ! Excellent score, continuez comme ça !
                </p>
              </div>
            ) : (
              <div className="result-container">
                <p className="score-infos">
                  Vous avez obtenu un score inférieur à la moyenne.
                  <br />
                  <a
                    className="link"
                    href="https://www.croix-rouge.fr/les-gestes-de-premiers-secours"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🔗 Se renseigner sur les gestes de premiers secours
                  </a>
                </p>
              </div>
            )}
            <button onClick={reset} className="next-btn">
              <span>Recommencer</span>
              <svg width="15px" height="10px" viewBox="0 0 13 10">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Quizz;
