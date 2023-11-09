import {
  useRef,
  useMemo,
  useLayoutEffect,
  useEffect,
  useState,
  useReducer,
} from 'react';
import './concepts.css';

const initialState = {
  backgroundColor: 'orange',
  style: {
    fontSize: '22px',
    fontFamily: 'Helvetica',
  },
};

const reducer = (state, action) => {
  console.log(state, action);
  switch (action) {
    case 'white':
      return { ...state, backgroundColor: 'white' };
    case 'black':
      return { ...state, backgroundColor: 'black' };
    case 'purple':
      return { ...state, backgroundColor: 'purple' };
    case 'orange':
      return { ...state, backgroundColor: 'orange' };
    case 'blue':
      return { ...state, backgroundColor: 'blue' };
    case 'green':
      return { ...state, backgroundColor: 'green' };
    case 'red':
      return { ...state, backgroundColor: 'red' };
    default:
      return { ...state, backgroundColor: 'yellow' };
  }
};
const Concepts = () => {
  // useState
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('');
  const [counter, setCounter] = useState(0);
  const [anotherCounter, setAnotherCounter] = useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // useEffect renders once every component is rendered on the screen
  useEffect(() => {
    const incrementer = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(incrementer);
  }, []);

  useEffect(() => {
    document.title = title;
  }, [title]);

  // useLayoutEffect renders before other elements are rendered on the screen
  useLayoutEffect(() => {
    (() => {
      if (anotherCounter === 0) {
        setAnotherCounter(Math.random() * 200);
      }
    })();
  }, [anotherCounter]);

  //useReducer
  const [state, dispatch] = useReducer(reducer, initialState);
  const buttonStyle = {
    borderRadius: '5px',
    width: '80px',
    height: '40px',
    color: 'green',
  };

  //useRef
  const myHeaderRef = useRef();
  useEffect(() => {
    console.log('CSS Property of input Element using useRef');
    console.log(myHeaderRef.current.offsetHeight);
    console.log(myHeaderRef);
  }, []);

  /* useMemo  */

  /* After useMemo */
  const expensiveCalculation = () => {
    return Math.random() * 500;
  };
  /* calculates once and caches the value, useMemo  only rerenders if dependency changes */
  const renderedValue = useMemo(() => expensiveCalculation(), []);

  return (
    <>
      <div>
        <span>Concepts</span>
      </div>

      <div className="concepts-flex-container">
        <div className="concepts-flex-container-item">
          <button onClick={increment}>Add Counter - [ {count} ]</button>
          <p onClick={increment} style={{ buttonStyle }}>
            Count : {count}
          </p>
        </div>

        <div className="concepts-flex-container-item">
          <h5>setInterval / clearInterval [ {counter} ]</h5>
        </div>

        <div className="concepts-flex-container-item">
          <h5> UseEffect 🔥 - [{anotherCounter}]</h5>
        </div>

        <div className="concepts-flex-container-item">
          <h5 onClick={() => setAnotherCounter(0)}>UseLayoutEffect🔥 </h5>
        </div>

        <div className="concepts-flex-container-item">
          <h5>Set title using {title} </h5>
          <span>
            {' '}
            <input
              placeholder="Enter title here"
              onChange={(e) => setTitle(e.target.value)}
              type="text"
            ></input>
          </span>
        </div>

        <div
          style={{ backgroundColor: state.backgroundColor }}
          className="concepts-flex-container-item"
        >
          <h5>Reducer Demo</h5>
          <div>
            <select
              onChange={(e) => dispatch(e.target.value)}
              value={state.backgroundColor}
            >
              <option value="blue">blue</option>
              <option value="orange">orange</option>
              <option value="red">red</option>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="purple">purple</option>
              <option value="green">green</option>
            </select>
          </div>
        </div>

        <div className="concepts-flex-container-item">
          <span ref={myHeaderRef}>
            [UseRef] offsetHeight: {myHeaderRef?.current?.offsetHeight}
          </span>
        </div>

        <div className="concepts-flex-container-item">
          <span>[useMemo] rendered value : {renderedValue} </span>
        </div>
      </div>
    </>
  );
};

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

export default Concepts;

// The below could lead to an infinite loop

// useEffect(() => {
// 	const incrementer = setInterval(() => {
// 		setCounter((prevCounter) => prevCounter + 1);
// 	}, 1000);
// 	return () => clearInterval(incrementer);
// }, [counter]);

// This will flicker when re-renders so use useLayoutEffect

// useEffect(() => {
// 	function test() {
// 		if (counter === 0) {
// 			setCounter(Math.random() * 200);
// 		}
// 	}
// 	test();
// }, [counter]);
