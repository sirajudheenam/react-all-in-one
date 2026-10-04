import React, { useState } from 'react';
import './DateCountApp.css';

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

const DateCountApp = () => {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setStep(1);
    setCount(0);
  }

  return (
    <div className="date-count-app">
      <header className="demo-header">
        <div className="demo-header__badge">useState</div>
        <h1 className="demo-header__title">Date Counter</h1>
        <p className="demo-header__desc">A step-based date counter showing how useState drives derived UI values without extra state.</p>
      </header>

      <div className="date-count-row">
        <button onClick={() => setStep((s) => s - 1)}>−</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <input
        type="range"
        min="0"
        max="10"
        onChange={(e) => setStep(Number(e.target.value))}
        value={step}
      />

      <div className="date-count-row">
        <button onClick={() => setCount((c) => c - step)}>−</button>
        <span>Count : {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <input
        type="text"
        onChange={(e) => setCount(Number(e.target.value))}
        value={count}
      />

      <p className="date-count-result">
        {count === 0
          ? 'Today is '
          : count > 0
          ? `${count} day(s) from today is `
          : `${Math.abs(count)} day(s) ago from today was `}
        <strong>{date.toDateString()}</strong>
      </p>

      {(count !== 0 || step !== 1) && (
        <div style={{ textAlign: 'center' }}>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default DateCountApp;
