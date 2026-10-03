import React, { useState, useEffect, useReducer } from 'react';
import './UseEffectDemo.css';

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

function UseEffectDemo() {
  // const what = useState();
  // console.log(what);

  const [emotion, setEmotion] = useState('happy');
  const [secondary, setSecondary] = useState('tired');

  // To replace this make use of useReducer
  // const [checked, setChecked] = useState(false)

  // // To replace this
  // // onChange={ () => setChecked( (checked) => !checked )}
  // function toggle() {
  //   setChecked( (checked) => !checked )
  // }

  const [checked, toggle] = useReducer((checked) => !checked, false);
  // toggle is the name of the function
  // first argement is the function logic
  // second argument is the default state

  // useEffect  also takes dependency array as second argument
  // this watches emotion change and calls if it changes
  useEffect(() => {
    console.log(`It's ${emotion} around here`);
  }, [emotion]);

  // this watches secondary emotion change and calls if it changes
  useEffect(() => {
    console.log(`It's ${secondary} around here`);
  }, [secondary]);

  // this watches [checked] change and calls if it changes
  useEffect(() => {
    console.log(`Checked? :${checked}`);
  }, [checked]);

  // useEffect(() => {
  //   console.log(`It's ${emotion} and ${secondary} around here and template checked status is ${checked}`);
  // }, []); //[] is dependency array; with an empty [], it just executed on initial render only
  // with []; executed only once

  // this watches all [emotion secondary checked] change and calls if anyone changes
  useEffect(() => {
    console.log(
      `It's ${emotion} and ${secondary} around here and template checked status is ${checked}`
    );
  }); // no second argument for useEffect. hence this watches for all changes.
  // It gets executed whenever render and re-render happens

  console.log('During Render');

  useEffect(function () {
    console.log('After initial render');
  }, []);

  useEffect(function () {
    console.log('After every render');
  });

  useEffect(
    function () {
      console.log('Each time checked value changes');
    },
    [checked]
  );
  return (
    <>
      <div className="use-effect-demo">
        <header className="demo-header">
          <div className="demo-header__badge">useEffect</div>
          <h1 className="demo-header__title">useEffect Demo</h1>
          <p className="demo-header__desc">Explores useEffect dependencies, cleanup functions, and common side-effect patterns.</p>
        </header>
        <h1>
          Current emotion is {emotion} and {secondary}
        </h1>
        <button onClick={() => setEmotion('Sick')} className="btn-demo">
          Make Sick{' '}
        </button>
        <button
          onClick={() => setEmotion('Enthustiastic')}
          className="btn-demo"
        >
          Make Enthuse
        </button>
        <button onClick={() => setEmotion('Amazed')} className="btn-demo">
          Make Amaze
        </button>
        <br />
        <button onClick={() => setSecondary('Crabby')} className="btn-demo">
          Make Crabby{' '}
        </button>
        <button onClick={() => setSecondary('Happy')} className="btn-demo">
          Make Happy
        </button>
        <button onClick={() => setSecondary('Drowsy')} className="btn-demo">
          Make Drowsy
        </button>
        <hr />
        <input id="cheked" type="checkbox" value={checked} onChange={toggle} />
        <p>{checked ? 'checked' : 'not checked'}</p>
      </div>
    </>
  );
}

export default UseEffectDemo;
