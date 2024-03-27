import { useEffect, useReducer } from 'react';
import StartScreen from './StartScreen';
import axios from 'axios';

import Header from './Header';
import Main from './Main';
import Loader from './Loader';
import Error from './Error';
import Question from './Question';

const initialState = {
  questions: [],
  status: 'loading',
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
    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const numQuestions = state.questions.length;
  const questions = state.questions;

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
        {state.status === 'loading' && <Loader />}
        {state.status === 'error' && <Error />}
        {state.status === 'ready' && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {state.status === 'active' && <Question questions={questions} />}
      </Main>
    </div>
  );
}

export default App;
