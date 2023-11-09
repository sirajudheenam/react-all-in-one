import { useQuiz } from '../contexts/QuizContext';

function Options({ question }) {
  const { dispatch, answer } = useQuiz();

  const hasAnswered = answer !== null;

  return (
    <div className="options">
      {question.de.answers.map((ans, index) => (
        <button
          className={`btn btn-option ${index === answer ? 'answer' : ''} ${
            hasAnswered ? (ans.key === 1 ? 'correct' : 'wrong') : ''
          }`}
          key={ans.content}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: 'newAnswer', payload: index })}
        >
          {ans.content}
        </button>
      ))}
    </div>
  );
}

export default Options;
