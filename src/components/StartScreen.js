function StartScreen({ numQuestions, dispatch }) {
  console.log(numQuestions);
  return (
    <div className='start'>
      <h3>Welcome to Civil Services Quiz</h3>
      <h4>
        You have {numQuestions} questions to Test Your Civil Services Mastery
      </h4>
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
