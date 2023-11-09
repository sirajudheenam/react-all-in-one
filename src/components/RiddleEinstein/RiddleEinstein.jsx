import React, { useEffect, useState, useRef } from 'react';
// import './RiddleEinstein.css';
import { tmpdir } from 'os';
const { inspect } = require('util');
const { transform, isEqual, isArray, isObject } = require('lodash');
const merge = require('deepmerge');

const houses = [1, 2, 3, 4, 5];

const COLORS = ['green', 'blue', 'yellow', 'white', 'red'];
const PETS = ['dogs', 'cat', 'fish', 'horse', 'birds'];
const DRINKS = ['beer', 'water', 'coffee', 'tea', 'milk'];
const SMOKES = ['Dunhill', 'PallMall', 'Bluemaster', 'Blend', 'Prince'];
const POSITIONS = ['one', 'two', 'three', 'four', 'five'];
const NATIONALITIES = ['Brit', 'Norwegian', 'Dane', 'Swede', 'German'];

const hintOrders = [
  '9',
  '14',
  '8',
  '4',
  '5',
  '1',
  '7',
  '11',
  '3',
  '12',
  '15',
  '13',
  '10',
  '6',
  '2',
];

const RULES = [
  { id: '1', hint: 'The Brit lives in the red house.', applied: false },
  { id: '2', hint: 'The Swede keeps dogs as pets.', applied: false },
  { id: '3', hint: 'The Dane Drinks tea.', applied: false },
  {
    id: '4',
    hint: 'The Green house is on the left of the White house.',
    applied: false,
  },
  { id: '5', hint: 'The Green home owner drinks coffee.', applied: false },
  {
    id: '6',
    hint: 'The person who smokes Pall Mall rears birds.',
    applied: false,
  },
  {
    id: '7',
    hint: 'The owner of the yellow house smokes Dunhill.',
    applied: false,
  },
  {
    id: '8',
    hint: 'The man living in the center drinks milk.',
    applied: false,
  },
  {
    id: '9',
    hint: 'The Norwegian lives in the first house.',
    applied: false,
  },
  {
    id: '10',
    hint: 'The man who smokes Blend lives next to the one who keeps cats.',
    applied: false,
  },
  {
    id: '11',
    hint: 'The man who keeps the horse lives next to the man who smokes Dunhill.',
    applied: false,
  },
  {
    id: '12',
    hint: 'The owner who smokes Bluemaster drinks beer.',
    applied: false,
  },
  { id: '13', hint: 'The German smokes Prince.', applied: false },
  {
    id: '14',
    hint: 'The Norwegian lives next to the blue house.',
    applied: false,
  },
  {
    id: '15',
    hint: 'The man smokes Blend has a neighbor who drinks water.',
    applied: false,
  },
];

const PROPERTIES = [
  {
    id: 1,
    nationality: '',
    color: '',
    position: '',
    smoke: '',
    drink: '',
    pet: '',
  },
  {
    id: 2,
    nationality: '',
    color: '',
    position: '',
    smoke: '',
    drink: '',
    pet: '',
  },
  {
    id: 3,
    nationality: '',
    color: '',
    position: '',
    smoke: '',
    drink: '',
    pet: '',
  },
  {
    id: 4,
    nationality: '',
    color: '',
    position: '',
    smoke: '',
    drink: '',
    pet: '',
  },
  {
    id: 5,
    nationality: '',
    color: '',
    position: '',
    smoke: '',
    drink: '',
    pet: '',
  },
];

function Controls({
  onClickReset,
  onClickSolvePuzzle,
  onClickShowHintOrder,
  onClickUndo,
  onClickRedo,
  onClickApplyOneStep,
}) {
  return (
    <div className="controls">
      <button onClick={(e) => onClickReset(e)} className="btn--reset">
        RESET
      </button>
      <button
        onClick={(e) => onClickSolvePuzzle(e)}
        className="btn btn--solve-puzzle"
      >
        Solve Puzzle
      </button>
      <button onClick={(e) => onClickShowHintOrder(e)} className="btn-hints">
        Show Hints
      </button>
      <button onClick={(e) => onClickUndo(e)} className="btn ">
        Undo ↩️
      </button>
      <button onClick={(e) => onClickRedo(e)} className="btn ">
        Redo ↪️
      </button>
      <button onClick={(e) => onClickApplyOneStep(e)} className="btn ">
        One Step
      </button>
    </div>
  );
}

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about">
          <h2>Einstein's Riddle</h2>
          <p>
            Einstein wrote this riddle early during the 19th century. He said
            98% of the world could not solve it. It is not hard, you just need
            to pay attention and be patient.
          </p>
          <p>
            There are 5 houses in 5 different colors. In each house lives a
            person with different nationality. The 5 owners drink a certain type
            of beverage, smoke a certain brand of cigar, and keep a certain pet.
            No owners have the same pet, smoke the same brand of cigar, or drink
            the same beverage. The question is: Who owns the fish?
          </p>
        </div>
      </div>
    </>
  );
}

function Hints({ hints, onClickRules, showHintOrder }) {
  function displayHintOrder(hint_id) {
    let foundIndex = hintOrders.indexOf(hint_id);
    return foundIndex + 1;
  }

  return (
    <div className="hints-container">
      <div className="hints">
        <ul type="square" className="hints-list">
          {hints.map(function (hint) {
            return (
              <li key={hint.id}>
                <button
                  className={
                    'btn-hints ' + (hint.applied ? ' btn-applied' : '')
                  }
                  onClick={() => onClickRules(hint.id)}
                >
                  <span className="serial-number">{hint.id}</span> {hint.hint}
                  <span
                    className="hintOrder"
                    hidden={showHintOrder ? false : true}
                  >
                    {displayHintOrder(hint.id)}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function House({
  id,
  onChangeProperties,
  properties,
  setProperties,
  pets,
  setPets,
  smokes,
  setSmokes,
  drinks,
  setDrinks,
  colors,
  setColors,
  nationalities,
  setNationalities,
  positions,
  setPositions,
  changes,
  setChanges,
}) {
  //   localStorage.removeItem('properties');
  const localProperties = JSON.parse(localStorage.getItem('properties'));

  const [color, setColor] = useState(function () {
    if (localProperties === null || localProperties === 'undefined') {
      return '';
    }
    return localProperties[Number(id) - 1].color;
  });
  const [position, setPosition] = useState(function () {
    if (localProperties === null || localProperties === 'undefined') {
      return '';
    }
    return localProperties[Number(id) - 1].position;
  });
  const [pet, setPet] = useState(function () {
    if (localProperties === null || localProperties === 'undefined') {
      return '';
    }
    return localProperties[Number(id) - 1].pet;
  });
  const [drink, setDrink] = useState(function () {
    if (localProperties === null || localProperties === 'undefined') {
      return '';
    }
    return localProperties[Number(id) - 1].drink;
  });
  const [smoke, setSmoke] = useState(function () {
    if (localProperties === null || localProperties === 'undefined') {
      return '';
    }
    return localProperties[Number(id) - 1].smoke;
  });
  const [nationality, setNationality] = useState(function () {
    if (localProperties === null || localProperties === 'undefined') {
      return '';
    }
    return localProperties[Number(id) - 1].nationality;
  });

  const inputColor = useRef(null);
  const inputPosition = useRef(null);
  const inputPet = useRef(null);
  const inputDrink = useRef(null);
  const inputSmoke = useRef(null);
  const inputNationality = useRef(null);

  let tempArray = [...properties];
  let index = 0;

  function onChangePosition(e) {
    index = tempArray.findIndex((item) => item.id === Number(id));
    tempArray[index].position = e.target.value;
    // setProperties(merge(tempArray, [...properties]);
    // setProperties(tempArray);
    tempArray = [];
  }
  console.log(properties);
  function onChangePet(e) {
    index = tempArray.findIndex((item) => item.id === Number(id));
    tempArray[index].pet = e.target.value;
    setProperties(tempArray);
    tempArray = [];
  }

  function onChangeDrink(e) {
    index = tempArray.findIndex((item) => item.id === Number(id));
    tempArray[index].drink = e.target.value;
    setProperties(tempArray);
    tempArray = [];
  }

  function onChangeColor(e) {
    index = tempArray.findIndex((item) => item.id === Number(id));
    tempArray[index].color = e.target.value;
    setProperties(tempArray);
    tempArray = [];
  }

  function onChangeSmoke(e) {
    index = tempArray.findIndex((item) => item.id === Number(id));
    tempArray[index].smoke = e.target.value;
    setProperties(tempArray);
    tempArray = [];
  }

  function onChangeNationality(e) {
    index = tempArray.findIndex((item) => item.id === Number(id));
    tempArray[index].nationality = e.target.value;
    setProperties(tempArray);
    tempArray = [];
  }

  useEffect(() => {
    if (properties !== null || properties !== 'undefined') {
      setColor(properties[Number(id) - 1].color);
      setPosition(properties[Number(id) - 1].position);
      setDrink(properties[Number(id) - 1].drink);
      setNationality(properties[Number(id) - 1].nationality);
      setSmoke(properties[Number(id) - 1].smoke);
      setPet(properties[Number(id) - 1].pet);
    }
  }, [properties, id]);

  return (
    <>
      <div
        className={`house house-${id}`}
        id={id}
        style={{ background: `${color}` }}
      >
        <div className="house-title">{id}</div>
        <ol>
          <li key="POSITION">
            <select
              name="position"
              id="position-select"
              value={position}
              onChange={(e) => onChangePosition(e)}
              ref={inputPosition}
              className={'options ' + `${position === '' ? '' : 'selected'}`}
            >
              <option value="" className="option-label">
                -POSITION-
              </option>
              {positions.map((position) => (
                <option value={position} key={`${id}-${position}`}>
                  {position}
                </option>
              ))}
            </select>
          </li>
          <li key="HOUSECOLOR">
            <select
              name="color"
              id="color-select"
              value={color}
              onChange={(e) => onChangeColor(e)}
              ref={inputColor}
              className={'options ' + `${color === '' ? '' : 'selected'}`}
            >
              <option value="">-COLOR-</option>
              {colors.map((color) => (
                <option value={color} key={`${id}-${color}`}>
                  {color}
                </option>
              ))}
            </select>
          </li>
          <li key="PET">
            <select
              name="pets"
              id="pet-select"
              value={pet}
              onChange={(e) => onChangePet(e)}
              ref={inputPet}
              className={'options ' + `${pet === '' ? '' : 'selected'}`}
            >
              <option value="">-PET-</option>
              {pets.map((pet) => (
                <option value={pet} key={`${id}-${pet}`}>
                  {pet}
                </option>
              ))}
            </select>
          </li>
          <li key="DRINKS">
            <select
              name="drinks"
              id="drink-select"
              value={drink}
              onChange={(e) => onChangeDrink(e)}
              ref={inputDrink}
              className={'options ' + `${drink === '' ? '' : 'selected'}`}
            >
              <option value="">-DRINK-</option>
              {drinks.map((drink) => (
                <option value={drink} key={`${id}-${drink}`}>
                  {drink}
                </option>
              ))}
            </select>
          </li>
          <li key="SMOKES">
            <select
              name="smokes"
              id="smoke-select"
              value={smoke}
              onChange={(e) => onChangeSmoke(e)}
              ref={inputSmoke}
              className={'options ' + `${smoke === '' ? '' : 'selected'}`}
            >
              <option value="">-SMOKE-</option>
              {smokes.map((smoke) => (
                <option value={smoke} key={`${id}-${smoke}`}>
                  {smoke}
                </option>
              ))}
            </select>
          </li>
          <li key="NATIONALITY">
            <select
              name="nationality"
              id="nationalitiy-select"
              value={nationality}
              onChange={(e) => onChangeNationality(e)}
              ref={inputNationality}
              className={'options ' + `${nationality === '' ? '' : 'selected'}`}
            >
              <option value="">-NATIONALITY-</option>
              {nationalities.map((nationality) => (
                <option value={nationality} key={`${id}-${nationality}`}>
                  {nationality}
                </option>
              ))}
            </select>
          </li>
        </ol>
      </div>
    </>
  );
}

export default function RiddleEinstein() {
  const [colors, setColors] = useState(COLORS);
  const [pets, setPets] = useState(PETS);
  const [drinks, setDrinks] = useState(DRINKS);
  const [smokes, setSmokes] = useState(SMOKES);
  const [positions, setPositions] = useState(POSITIONS);
  const [nationalities, setNationalities] = useState(NATIONALITIES);

  // localStorage.removeItem('properties');

  const [properties, setProperties] = useState(function () {
    let localProperties;
    if (localStorage.getItem('properties') === null) {
      localStorage.setItem('properties', JSON.stringify(PROPERTIES));
    } else {
      localProperties = JSON.parse(localStorage.getItem('properties'));
    }
    return localProperties ? localProperties : PROPERTIES;
  });

  // localStorage.removeItem('changes');

  const [changes, setChanges] = useState(function () {
    let localChanges;
    if (localStorage.getItem('changes') === null) {
      localStorage.setItem('changes', JSON.stringify([properties]));
    } else {
      localChanges = JSON.parse(localStorage.getItem('changes'));
    }
    return localChanges ? localChanges : [PROPERTIES];
  });

  // localStorage.removeItem('propertyHistory');

  const [hints, setHints] = useState(function () {
    let localRules;
    if (localStorage.getItem('hints') === null) {
      localStorage.setItem('hints', JSON.stringify(RULES));
    } else {
      localRules = JSON.parse(localStorage.getItem('hints'));
    }
    return localRules ? localRules : RULES;
  });

  const [showHintOrder, setShowHintOrder] = useState(false);

  // Solve the puzzle at a single button click
  function handleSolvePuzzle(e) {
    for (let i = 0; i < hints.length; i++) {
      let foundItem = hintOrders[i];
      handleApplyHints(foundItem);
    }
  }

  function handleResetLocalStorage(e) {
    localStorage.removeItem('properties');
    setProperties(PROPERTIES);
    localStorage.removeItem('hints');
    setHints(RULES);
    localStorage.removeItem('changes');
  }

  function handleShowHintOrder() {
    setShowHintOrder((current) => {
      return !current;
    });
  }

  const guessedIndex = useRef(1);

  const daneTeaFiveCombination = useRef(1);

  function findGreenHouse(assumedIndex) {
    // find the id which has the color 'blue'
    let foundItem = properties.filter((item) => item.color === 'blue')[0];
    let startIndex = properties.indexOf(foundItem);

    let p = properties.slice();
    if (assumedIndex === 2) {
      p[startIndex + assumedIndex - 1].color = '';
      p[startIndex + assumedIndex - 1].drink = 'milk';
    }
    p[startIndex + assumedIndex].color = 'green';
    p[startIndex + assumedIndex + 1].color = 'white';

    return p;
  }

  function handleFish() {
    // Last iteration with the new properties to find a place for the 'fish'
    let newProperties = properties.slice();
    newProperties.map((item) => {
      if (item.pet === '') {
        newProperties[item.id - 1].pet = 'fish';
      }
      return newProperties;
    });
  }

  function handleUndo(e) {
    e.preventDefault();
  }
  function handleRedo(e) {
    e.preventDefault();
  }
  function handleApplyOneStep(e) {
    e.preventDefault();
  }

  function handleApplyHints(hint_id) {
    setHints((hints) => {
      let newRules = hints.slice();
      newRules.map((hint) => {
        if (hint.id === hint_id) {
          hint.applied = true;
        }
        return newRules;
      });
      return newRules;
    });

    setProperties((p) => {
      let newProperties = p.slice();

      switch (hint_id) {
        case '1': {
          //The Brit lives in the red house.
          newProperties.map((item) => {
            if (item.nationality === '' && item.color === '') {
              newProperties[item.id - 1].color = 'red';
              newProperties[item.id - 1].nationality = 'Brit';
              newProperties[item.id - 1].position = 'three';
            }
            return newProperties;
          });
          break;
        }

        case '2': {
          newProperties.map((item) => {
            if (item.nationality === 'Swede') {
              newProperties[item.id - 1].pet = 'dogs';
              newProperties[item.id - 1].position = 'five';
            }
            return newProperties;
          });
          // Fill the final item 'fish'
          handleFish();
          break;
        }

        case '3': {
          // 3. The Dane Drinks tea.
          newProperties.map((item) => {
            if (daneTeaFiveCombination.current === 1) {
              if (item.id === 5) {
                newProperties[item.id - 1].nationality = 'Dane';
                newProperties[item.id - 1].drink = 'tea';
              }
            } else {
              if (item.id === 5) {
                newProperties[item.id - 1].smoke = 'Bluemaster';
                newProperties[item.id - 1].drink = 'beer';
                newProperties[item.id - 1].nationality = '';
              }
            }
            return newProperties;
          });
          break;
        }
        case '4': {
          // 4. The Dane smokes Bluemaster drinks beer.
          const updatedProperties = findGreenHouse(guessedIndex.current);
          setProperties(updatedProperties);
          break;
        }

        case '5': {
          // 5 Green house owner drinks coffee
          newProperties.map((item) => {
            if (item.color === 'green') {
              if (item.drink !== '') {
                guessedIndex.current = 2;
                handleApplyHints('4');
                newProperties[item.id - 1].drink = 'coffee';
                newProperties[item.id - 1].position = 'four';
              } else {
                guessedIndex.current = 1;
                newProperties[item.id - 1].drink = 'coffee';
                newProperties[item.id - 1].position = 'four';
              }
            }
            return newProperties;
          });
          break;
        }

        case '6': {
          // 6. The person who smokes Pall Mall rears birds.
          newProperties.map((item) => {
            if (item.smoke === '') {
              newProperties[item.id - 1].smoke = 'PallMall';
              newProperties[item.id - 1].pet = 'birds';
            }
            return newProperties;
          });
          break;
        }
        case '7': {
          // The owner of the yellow house smokes Dunhill.
          // find yellow house
          newProperties.map((item) => {
            if (item.color === '') {
              newProperties[item.id - 1].color = 'yellow';
              newProperties[item.id - 1].smoke = 'Dunhill';
            }
            return newProperties;
          });
          break;
        }
        case '8': {
          newProperties.map((item) => {
            // find the house has with id 2 which is the center house out of the 5 houses
            if (item.id === 2) {
              newProperties[item.id].drink = 'milk';
              newProperties[item.id].position = 'three';
            }
            return newProperties;
          });
          break;
        }
        case '9': {
          newProperties.map((item) => {
            // find the house has with id 1 which is the first house out of the 5 houses
            if (item.id === 1) {
              newProperties[item.id - 1].nationality = 'Norwegian';
              newProperties[item.id - 1].position = 'one';
            }
            return newProperties;
          });

          break;
        }

        case '10': {
          // 10. The man who smokes Blend lives next to the one who keeps cats.
          newProperties.map((item) => {
            if (item.smoke === 'Blend') {
              if (newProperties[item.id - 2].pet === '') {
                newProperties[item.id - 2].pet = 'cat';
              }
            }
            return newProperties;
          });
          break;
        }

        case '11': {
          //  The man who keeps the horse lives next to the man who smokes Dunhill.
          newProperties.map((item) => {
            if (item.smoke === 'Dunhill') {
              newProperties[item.id].pet = 'horse';
            }
            return newProperties;
          });
          break;
        }
        case '12': {
          //12. The owner who smokes Bluemaster drinks beer.
          newProperties.map((item) => {
            if (daneTeaFiveCombination.current === 1) {
              if (item.id === 2) {
                newProperties[item.id - 1].smoke = 'Bluemaster';
                newProperties[item.id - 1].drink = 'beer';
                newProperties[item.id - 1].nationality = '';
              }
            } else {
              if (item.id === 2) {
                newProperties[item.id - 1].nationality = 'Dane';
                newProperties[item.id - 1].drink = 'tea';
              }
            }
            // if all drinks are used, then empty is assigned with the remaining item water.
            if (item.drink === '') {
              newProperties[item.id - 1].drink = 'water';
            }

            return newProperties;
          });
          break;
        }
        case '13': {
          //13. The German smokes Prince.
          newProperties.map((item) => {
            if (item.nationality === '' && item.smoke === '') {
              newProperties[item.id - 1].smoke = 'Prince';
              newProperties[item.id - 1].nationality = 'German';
            }
            return newProperties;
          });
          // At this stage we have all the Natinality assigned except ? Swede
          // So find and map it
          // TODO : compare and find which one is missing and extract it from nationalities varibale and assign it dynamically
          newProperties.map((item) => {
            if (item.nationality === '') {
              newProperties[item.id - 1].nationality = 'Swede';
            }
            return newProperties;
          });

          break;
        }

        case '14': {
          newProperties.map((item) => {
            if (item.nationality === 'Norwegian') {
              newProperties[item.id].color = 'blue';
              newProperties[item.id].position = 'two';
            }
            return newProperties;
          });
          break;
        }
        case '15': {
          //15. The man smokes Blend has a neighbor who drinks water.
          newProperties.map((item) => {
            if (item.drink === 'water') {
              if (newProperties[item.id].smoke === '') {
                newProperties[item.id].smoke = 'Blend';
              } else {
                daneTeaFiveCombination.current = 0;
                newProperties[item.id].smoke = '';
                handleApplyHints('3');
                handleApplyHints('12');
              }
            }
            return newProperties;
          });
          break;
        }

        default: {
          console.log('Default');
          break;
        }
      }
      return newProperties;
    });
  }

  useEffect(() => {
    localStorage.setItem('properties', JSON.stringify(properties));
  }, [properties]);

  useEffect(() => {
    localStorage.setItem('hints', JSON.stringify(hints));
  }, [hints]);

  // console.log('changes');
  // console.log(changes);

  return (
    <>
      <div className="menu">---</div>

      <div className="container">
        <div className="about-container">
          <About />
        </div>
        <div className="hints-container">
          <Hints
            hints={hints}
            onClickRules={handleApplyHints}
            showHintOrder={showHintOrder}
          />
        </div>
        <div className="house-container">
          {houses.map((house) => {
            return (
              <House
                id={house}
                key={house}
                properties={properties}
                setProperties={setProperties}
                pets={pets}
                setPets={setPets}
                smokes={smokes}
                setSmokes={setSmokes}
                drinks={drinks}
                setDrinks={setDrinks}
                colors={colors}
                setColors={setColors}
                nationalities={nationalities}
                setNationalities={setNationalities}
                positions={positions}
                setPositions={setPositions}
                changes={changes}
                setChanges={setChanges}
              />
            );
          })}
          <Controls
            onClickReset={handleResetLocalStorage}
            onClickSolvePuzzle={handleSolvePuzzle}
            onClickShowHintOrder={handleShowHintOrder}
            onClickUndo={handleUndo}
            onClickRedo={handleRedo}
            onClickApplyOneStep={handleApplyOneStep}
          />
        </div>
      </div>
    </>
  );
}
