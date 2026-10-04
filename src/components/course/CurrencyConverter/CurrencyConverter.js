// codesandbox.io/s/react-challenge-currency-converter-starter-3i1jdr?
// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from 'react';
import './CurrencyConverter.css';
export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [sourceCurrency, setSourceCurrency] = useState('EUR');
  const [targetCurrency, setTargetCurrency] = useState('USD');
  const [converted, setConverted] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function convert() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${sourceCurrency}&to=${targetCurrency}`
      );
      const data = await res.json();
      setConverted(data.rates[targetCurrency]);
      setIsLoading(false);
    }
    if (sourceCurrency === targetCurrency) return setConverted(amount);
    convert();
  }, [amount, sourceCurrency, targetCurrency]);

  return (
    <div className="App currency-converter">
      <header className="demo-header">
        <div className="demo-header__badge">useEffect · fetch</div>
        <h1 className="demo-header__title">Currency Converter</h1>
        <p className="demo-header__desc">Fetches live exchange rates and converts between currencies, demonstrating side effects and controlled inputs.</p>
      </header>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        onChange={(e) => setSourceCurrency(e.target.value)}
        value={sourceCurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        onChange={(e) => setTargetCurrency(e.target.value)}
        value={targetCurrency}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {!isLoading && (
        <p>
          {converted} {targetCurrency}
        </p>
      )}
    </div>
  );
}
