import { useQuiz } from '../contexts/QuizContext';

function Header() {
  const { dispatch } = useQuiz();
  return (
    <header className="react-quiz-app-header">
      <img
        src="logo512.png"
        alt="React logo"
        className="react-quiz-app-header-image"
      />
      <h1>Life in Deutschland</h1>
      <div className="local-button">
        <button
          className="btn"
          onClick={() => dispatch({ type: 'fetchLocalStorage' })}
        >
          Saved
        </button>
      </div>
      <div className="reset-button">
        <button
          className="btn"
          onClick={() => dispatch({ type: 'resetLocalStorage' })}
        >
          Reset
        </button>
      </div>
    </header>
  );
}

export default Header;
