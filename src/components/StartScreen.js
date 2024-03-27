function StartScreen({ numQuestions, dispatch }) {
  console.log(numQuestions);
  return (
    <div className='start'>
      <h3>Welcome to React Quiz</h3>
      <p>You have {numQuestions} questions to Test Your React Mastery</p>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'start' })}
      >
        Let's Start
      </button>
    </div>
  );
}

export default StartScreen;
