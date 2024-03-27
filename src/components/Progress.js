function Progress({ index, numQuestions, points, maxPossiblePoints, answer }) {
  return (
    <header className='progress'>
      <p>
        <strong>Question:</strong>
        {index + 1}/{numQuestions}
      </p>
      <p>
        <strong>Points:</strong>
        {points}/{maxPossiblePoints}
      </p>
      <progress
        max={numQuestions}
        value={answer !== null ? index + 1 : index}
      />
    </header>
  );
}

export default Progress;
