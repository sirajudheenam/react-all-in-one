import React from 'react';

import App from './components/App';
import { QuizProvider } from './contexts/QuizContext';
export async function action() {
  return null;
}
export async function loader({ request }) {
  return null;
}

const DEQuiz = () => {
  return (
    <QuizProvider>
      <App />
    </QuizProvider>
  );
};
export default DEQuiz;
