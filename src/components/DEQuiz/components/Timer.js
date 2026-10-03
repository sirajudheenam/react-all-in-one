import { useEffect } from 'react';
import { useQuiz } from '../contexts/QuizContext';

function Timer() {
  const { dispatch, secondsRemaining } = useQuiz();

  // eslint-disable-next-line no-unused-vars
  const mins = Math.floor(secondsRemaining / 60);
  // eslint-disable-next-line no-unused-vars
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: 'tick' });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    // <div className="timer">
    //   {mins < 10 && '0'}
    //   {mins}:{seconds < 10 && '0'}
    //   {seconds}
    // </div>
    <div className="timer">Remaining</div>
  );
}

export default Timer;
