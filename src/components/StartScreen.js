function StartScreen({ numQuestions, dispatch }) {
  console.log(numQuestions);
  return (
    <div className='start'>
      <h3>Welcome to Civil Services Quiz</h3>
      <p>
        You have {numQuestions} questions to Test Your Civil Services Mastery
      </p>
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
