import { useEffect, useReducer } from 'react';
import StartScreen from './StartScreen';
import axios from 'axios';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import Question from './Question';
import NextButton from './NextButton';

const initialState = {
  questions: [],
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        status: 'ready',
        questions: action.payload,
      };

    case 'dataFailed':
      return {
        ...state,
        status: 'failed',
      };

    case 'start':
      return {
        ...state,
        status: 'active',
      };
    case 'newAnswer': {
      const questions = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === questions.correctOption
            ? state.points + questions.points
            : state.points,
      };
    }

    case 'nextQuestion':
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    default:
      return state;
  }
}
function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const numQuestions = questions.length;

  useEffect(() => {
    axios
      .get('http://localhost:8000/questions')
      .then(data => data.data)
      .then(data => dispatch({ type: 'dataReceived', payload: data }))
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === 'active' && (
          <>
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton dispatch={dispatch} answer={answer} />
          </>
        )}
      </Main>
    </div>
  );
}

export default App;
