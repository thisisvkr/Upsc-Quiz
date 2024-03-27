import Option from './Option';

function Question({ questions, dispatch, answer }) {
  console.log(answer);
  console.log(questions);
  return (
    <div>
      <h4>{questions.question}</h4>
      <Option questions={questions} dispatch={dispatch} answer={answer} />
    </div>
  );
}

export default Question;
