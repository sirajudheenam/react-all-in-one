/* https://codesandbox.io/s/react-challenge-usereducer-bank-starter-hclebv? */

import { useReducer } from 'react';
import styles from './BankAccount.module.css';

/*
INSTRUCTIONS / CONSIDERATIONS:

1. Let's implement a simple bank account! It's similar to the example that I used as an analogy to explain how useReducer works, but it's simplified (we're not using account numbers here)

2. Use a reducer to model the following state transitions: openAccount, deposit, withdraw, requestLoan, payLoan, closeAccount. Use the `initialState` below to get started.

3. All operations (expect for opening account) can only be performed if isActive is true. If it's not, just return the original state object. You can check this right at the beginning of the reducer

4. When the account is opened, isActive is set to true. There is also a minimum deposit amount of 500 to open an account (which means that the balance will start at 500)

5. Customer can only request a loan if there is no loan yet. If that condition is met, the requested amount will be registered in the 'loan' state, and it will be added to the balance. If the condition is not met, just return the current state

6. When the customer pays the loan, the opposite happens: the money is taken from the balance, and the 'loan' will get back to 0. This can lead to negative balances, but that's no problem, because the customer can't close their account now (see next point)

7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
  message: '',
  error: '',
};
const reducer = (state, action) => {
  if (!state.isActive && action.type !== 'openAccount') return;
  console.log(state, action);
  switch (action.type) {
    case 'openAccount':
      return {
        ...initialState,
        isActive: true,
        balance: 500,
        error: '',
        message:
          'New account is opened for you.. You have an initial deposit of 500',
      };

    case 'deposit':
      return state.isActive === true
        ? {
            ...state,
            balance: state.balance + action.payload.amount,
            message: `Deposited ${
              action.payload.amount
            }. Account balance now is ${state.balance + action.payload.amount}`,
            error: '',
          }
        : {
            ...state,
            error: 'You must open an account before you can deposit',
          };
    case 'withdraw':
      return {
        ...state,
        balance:
          state.balance >= action.payload.amount
            ? state.balance - action.payload.amount
            : state.balance,
        message:
          state.balance > action.payload.amount
            ? `Withdrawn ${action.payload.amount}. Account balance now is ${
                state.balance - action.payload.amount
              }`
            : `You account balance is too low to withdraw ${action.payload.amount}`,
        error: '',
      };

    case 'withdrawAll':
      return {
        ...state,
        balance: 0,
        message: 'You have withdrawn all',
        error: '',
      };
    case 'getLoan':
      if (state.loan > 0)
        return {
          ...state,
          message: 'You already have a loan',
        };
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        message: `Loan is paid to your account and new balance is ${
          state.balance + action.payload.amount
        }`,
      };
    case 'payLoan':
      if (state.loan === 0)
        return {
          ...state,
          message: 'You do not have a loan with outstanding balance',
        };
      return {
        ...state,
        balance: state.loan > 0 ? state.balance - state.loan : state.balance,
        loan: 0,
      };
    case 'closeAccount':
      return state.isActive === false
        ? { ...initialState, message: 'You do not have an account with us' }
        : state.balance > 0
        ? {
            ...state,
            message: `Your should withdraw remaining balance ${state.balance} to close your account`,
          }
        : state.loan > 0
        ? {
            ...state,
            message: `Your should payback outstanding loan amount ${state.loan} to close your account`,
          }
        : { ...initialState, message: 'Your account is closed' };
    default:
      return initialState;
  }
};
export default function BankAccountApp() {
  const [{ balance, loan, isActive, message, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className={styles.BankAccountApp}>
      <h1>Bank Account - useReducer</h1>
      <h3 className={styles.balance}>
        Balance: {balance} Loan: {loan}{' '}
      </h3>
      <h2 className={styles.message}>{message}</h2>
      <h2 className={styles.error}>{error}</h2>

      <div className={styles.BankAccountFlexContainer}>
        <div className={styles.BankAccountFlexItem}>
          <p>
            <button
              onClick={() =>
                dispatch({
                  type: 'openAccount',
                })
              }
              disabled={isActive}
            >
              Open account
            </button>
          </p>
        </div>
        <div className={styles.BankAccountFlexItem}>
          <p>
            <button
              onClick={() => {
                dispatch({ type: 'deposit', payload: { amount: 150 } });
              }}
              disabled={!isActive}
            >
              Deposit 150
            </button>
          </p>
        </div>
        <div className={styles.BankAccountFlexItem}>
          <p>
            <button
              onClick={() => {
                dispatch({ type: 'withdraw', payload: { amount: 50 } });
              }}
              disabled={!isActive}
            >
              Withdraw 50
            </button>
          </p>
        </div>
        <div className={styles.BankAccountFlexItem}>
          <p>
            <button
              onClick={() => {
                dispatch({ type: 'withdrawAll' });
              }}
              disabled={!isActive}
            >
              Withdraw All
            </button>
          </p>
        </div>
        <div className={styles.BankAccountFlexItem}>
          <p>
            <button
              onClick={() => {
                dispatch({ type: 'getLoan', payload: { amount: 5000 } });
              }}
              disabled={!isActive}
            >
              Request a loan of 5000
            </button>
          </p>
        </div>
        <div className={styles.BankAccountFlexItem}>
          <p>
            <button
              onClick={() => {
                dispatch({ type: 'payLoan', payload: { amount: 5000 } });
              }}
              disabled={!isActive}
            >
              Pay loan
            </button>
          </p>
        </div>
        <div className={styles.BankAccountFlexItem}>
          <p>
            <button
              onClick={() => {
                dispatch({
                  type: 'closeAccount',
                });
              }}
              disabled={!isActive}
            >
              Close account
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}
