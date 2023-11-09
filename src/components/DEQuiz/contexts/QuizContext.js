import { createContext, useContext, useReducer, useEffect } from 'react';

import QuestionsData from '../../../data/de_questions.json';
const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0,
  highscore: 0,
  secondsRemaining: null,
};

const currentState = JSON.parse(
  localStorage.getItem('leben-in-deutschland-state')
);

function reducer(state, action) {
  switch (action.type) {
    case 'dataReceived':
      return {
        ...state,
        questions: action.payload,
        status: 'ready',
      };
    case 'dataFailed':
      return {
        ...state,
        status: 'error',
      };
    case 'start':
      return {
        ...state,
        status: 'active',
        secondsRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case 'newAnswer':
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          question.de.answers[action.payload].key === 1
            ? state.points + 1
            : state.points,
      };
    case 'nextQuestion':
      return { ...state, index: state.index + 1, answer: null };
    case 'finish':
      return {
        ...state,
        status: 'finished',
        highscore:
          state.points > state.highscore ? state.points : state.highscore,
      };
    case 'restart':
      return { ...initialState, questions: state.questions, status: 'ready' };

    case 'tick':
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? 'finished' : state.status,
      };
    case 'resetLocalStorage':
      console.log('resetLocalStorage is called');
      return { ...initialState };

    case 'fetchLocalStorage':
      console.log('fetchLocalStorage is called');
      return currentState ? { ...currentState } : { ...initialState };

    case 'storeLocalStorage':
      console.log('storeLocalStorage is called');
      return { ...state };
    default:
      throw new Error('Action unkonwn');
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, points, highscore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;
  // const maxPossiblePoints = questions.reduce(
  //   (prev, cur) => prev + cur.points,
  //   0
  // );

  const maxPossiblePoints = 300;

  // useEffect(function () {
  //   fetch('http://localhost:9001/questions')
  //     .then((res) => res.json())
  //     .then((data) => dispatch({ type: 'dataReceived', payload: data }))
  //     .catch((err) => dispatch({ type: 'dataFailed' }));
  // }, []);

  useEffect(() => {
    try {
      const Questions = JSON.parse(JSON.stringify(QuestionsData.questions));
      dispatch({ type: 'dataReceived', payload: Questions });
    } catch (err) {
      dispatch({ type: 'dataFailed' });
    }
  }, []);

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highscore,
        secondsRemaining,
        numQuestions,
        maxPossiblePoints,

        dispatch,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (context === undefined)
    throw new Error('QuizContext was used outside of the QuizProvider');
  return context;
}

export { QuizProvider, useQuiz };
