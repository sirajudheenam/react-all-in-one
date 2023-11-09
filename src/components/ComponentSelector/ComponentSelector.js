import React, { useEffect } from 'react';

import SingaporeWeatherData from '../API/SingaporeWeatherData';
import { GitHubFetch } from '../API/GitHubFetch';
import { FetchAPI } from '../API/FetchAPI';

import Vehicle from '../Concepts/ClassComponentDemo';
import Concepts from '../Concepts/Concepts';
import ConditionalRendering from '../Concepts/ConditionalRendering';
import UseEffectDemo from '../Concepts/UseEffectDemo';
import UseTransitionDemo from '../Concepts/UseTransitionDemo';

import { Kitchen } from '../Kitchen/Kitchen';

import Game from '../Game/App';

/* course */
import Accordion from '../course/Accordion/App';
import EatAndSplit from '../course/EatAndSplit/EatAndSplit-v1';
import ReactQuiz from '../course/ReactQuiz/ReactQuiz';
import Steps from '../course/Steps/App-v1';
import TravelList from '../course/TravelList/App';
import UsePopcorn from '../course/UsePopcorn/App-v3';
import Advice from './course/Advice';
import CurrencyConverter from '../course/CurrencyConverter';
import DateCountApp from '../course/DateCountApp';
import FlashCardApp from '../course/FlashCardApp';
import PizzaApp from './course/PizzaApp';
import ScoreCard from '../course/ScoreCard';
import TipNSplit from '../course/TipNSplitv1';
import UseGeoLocation from '../course/UseGeoLocation';
import { TodoList } from '../course/TodoList/TodoList';
import { todos, tabs } from '../course/TodoList/todos';
/* course */

// import StepsContainer from './StepsContainer';

import CountriesList from '../CountriesList/CountriesList';
import { RouterDemo } from '../RouterDemo/RouterDemo';
import BlockNote from './BlockNote';

import '../../helpers/helper.js';
import '../styles/component_selector.css';

export const ComponentSelector = () => {
  const [selected, setSelected] = React.useState(() => {
    if (localStorage.getItem('selected-item') !== 'undefined') {
      return localStorage.getItem('selected-item');
    } else {
      return 'pizza';
    }
  });

  useEffect(() => {
    if (localStorage.getItem('selected-item') === 'undefined') {
      localStorage.setItem('selected-item', 'pizza');
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('selected-item', selected);
  }, [selected]);
  function handleModuleChange() {
    let e = document.getElementById('module');
    setSelected(e.value);
  }

  return (
    <>
      <div className="navbar">
        <header>
          <h1>React Demo</h1>
          <select
            name="module"
            id="module"
            onChange={handleModuleChange}
            value={selected}
          >
            <option value="blocknote">BlockNote</option>
            <optgroup label="Course Exercises">
              <option value="pizza">1. Pizza</option>
              <option value="steps">2. Steps</option>
              <option value="accordion">3. Accordion</option>
              <option value="eatandsplit">4. EatAndSplit</option>
              <option value="reactquiz">5. ReactQuiz</option>
              <option value="usepopcorn">6. UsePopcorn</option>
              <option value="currencyconverter">7. CurrencyConverter</option>
              <option value="tipnsplit">8. TipNSplit</option>
              <option value="usegeolocation">9. UseGeoLocation</option>
            </optgroup>
            <optgroup label="Code Challenge">
              <option value="score">1. Score</option>
              <option value="count">2. Date Count</option>
              <option value="flashcard">3. Flash Card</option>
            </optgroup>
            <optgroup label="CoreConcepts">
              concepts
              <option value="concepts">Concepts</option>
              <option value="classcomponentdemo">ClassComponentDemo</option>
              <option value="conditionalrendering">ConditionalRendering</option>
              <option value="useeffectdemo">UseEffectDemo</option>
              <option value="usetransitiondemo">UseTransitionDemo</option>
              <option value="api">API - SingaporeWeatherData</option>
              <option value="routerdemo">RouterDemo</option>
              <option value="game">Game</option>
              <option value="fetchapi">FetchAPI</option>
              <option value="kitchen">Kitchen</option>
              <option value="githubfetch">GitHubFetch</option>
              <option value="inlinestyle">InlineStyle</option>
              <option value="todolist">ToDo List</option>
              <option value="travellist">Travel List</option>
              <option value="countries_list">Countries List</option>
              <option value="advice">Advice</option>
            </optgroup>
          </select>
          <div>{selected}</div>
        </header>
      </div>

      <div className="component">
        {selected === 'blocknote' && <BlockNote className="container" />}
        {selected === 'concepts' && <Concepts />}
        {selected === 'classcomponentdemo' && <Vehicle />}
        {selected === 'conditionalrendering' && <ConditionalRendering />}
        {selected === 'useeffectdemo' && <UseEffectDemo />}
        {selected === 'usetransitiondemo' && <UseTransitionDemo />}

        {selected === 'api' && <SingaporeWeatherData />}
        {selected === 'githubfetch' && <GitHubFetch login="sirajudheenam" />}
        {selected === 'fetchapi' && <FetchAPI />}

        {/*  course */}
        {selected === 'pizza' && <PizzaApp className="pizza-body" />}
        {selected === 'steps' && <Steps className="steps-body" />}
        {selected === 'accordion' && <Accordion />}
        {selected === 'eatandsplit' && <EatAndSplit />}
        {selected === 'reactquiz' && <ReactQuiz />}
        {selected === 'usepopcorn' && <UsePopcorn />}
        {selected === 'currencyconverter' && <CurrencyConverter />}
        {selected === 'tipnsplit' && <TipNSplit />}
        {selected === 'usegeolocation' && <UseGeoLocation />}

        {selected === 'score' && (
          <ScoreCard login="sirajudheenam" className="score-body" />
        )}
        {selected === 'count' && <DateCountApp className="count-body" />}
        {selected === 'travellist' && <TravelList className="" />}
        {selected === 'flashcard' && <FlashCardApp className="" />}
        {selected === 'countries_list' && <CountriesList />}

        {selected === 'kitchen' && <Kitchen />}

        {selected === 'classcomponentdemo' && <Vehicle />}
        {selected === 'todolist' && <TodoList todos={todos} tab={tabs[0]} />}
        {selected === 'game' && <Game />}
        {selected === 'advice' && <Advice />}
        {selected === 'conditionalrendering' && <ConditionalRendering />}
        {selected === 'routerdemo' && <RouterDemo />}
        {selected === 'inlinestyle' &&
          React.createElement(
            'h1',
            { style: { color: 'blue', backgroundColor: 'orange' } },
            'Hello there !! So you reached here ?'
          )}
        {selected === 'undefined' && <div> No module selected</div>}
        {/* <CountriesList /> */}
      </div>
      <footer className="App-footer"></footer>
    </>
  );
};
export default ComponentSelector;
