import { useEffect, useState } from 'react';
import './Advice.css';

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

export default function Advice() {
  const [advice, setAdvice] = useState('');
  const [count, setCount] = useState(0);

  async function getAdvice() {
    const response = await fetch(`https://api.adviceslip.com/advice?t=${Date.now()}`);
    const data = await response.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="advice-container">
      <p className="advice-label">Advice #{count}</p>
      <p className="advice-text">{advice}</p>
      <button className="advice-btn" onClick={getAdvice}>Get new advice</button>
      <Message count={count} />
    </div>
  );
}

function Message({ count }) {
  return (
    <p className="advice-count">
      You have read <strong>{count}</strong> piece{count !== 1 ? 's' : ''} of advice.
    </p>
  );
}
