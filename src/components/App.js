import { useEffect, useReducer } from 'react';
import axios from 'axios';

import Header from './Header';

const initialState = {
  questions: [],
  status: 'loading',
};

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return { ...state, questions: action.payload, status: 'ready' };

    case 'dataFailed':
      return { ...state, staus: 'failed' };
    default:
      throw new Error('unkown action');
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, 0);
  useEffect(() => {
    axios
      .get('http://localhost:8000/questions')
      .then(res => res)
      .then(data => dispatch({ type: 'dataReceived', payload: data.data }))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='app'>
      <Header />
    </div>
  );
}

export default App;
