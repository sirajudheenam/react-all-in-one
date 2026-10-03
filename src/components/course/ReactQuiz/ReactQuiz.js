import React from 'react';

import App from './components/App-v1';
import { QuizProvider } from './contexts/QuizContext';
export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}
const ReactQuiz = () => {
  return (
    <div>
      <header className="demo-header">
        <div className="demo-header__badge">Context API · useReducer</div>
        <h1 className="demo-header__title">React Quiz</h1>
        <p className="demo-header__desc">Quiz app using React Context API and useReducer to manage complex state across multiple sub-components.</p>
      </header>
      <QuizProvider>
        <App />
      </QuizProvider>
    </div>
  );
};
export default ReactQuiz;
