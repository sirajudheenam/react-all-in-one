import React, { useEffect, useState, useTransition, useMemo } from 'react';

import './UseTransitionDemo.css';

export async function action() {
  return null;
}

export async function loader({ request }) {
  return null;
}

const url = 'https://pokeapi.co/api/v2/pokemon/';

const UseTransitionDemo = () => {
  const [input, setInput] = useState('');
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    let active = true;
    getPokemon();
    return () => {
      active = false;
    };
    async function getPokemon() {
      console.time('time starts');
      const res = await fetch(url);
      const data = await res.json();
      setPokemon(data.results);
      console.timeEnd('time starts');
    }
  }, []);

  /* useTransition */
  const [filteredPokemon, setFilteredPokemon] = useState([]);

  /* useTransition could mark the render this expensive operation as non-urgent operation 
  hence performance hit won't happen */
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
    /* set filteredPokemon here */
    pokemon.length > 0 &&
      startTransition(() => {
        /* This could be an expensive operation */
        setFilteredPokemon(pokemon.filter((poke) => poke.name.includes(input)));
      });
  };

  return (
    <>
      <div className="App">
        <input onChange={handleChange} type="text" value={input} />
        {isPending && 'Loading...'}
        {filteredPokemon.map((poke) => (
          <div key={poke.name}>
            <h1>{poke.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
};

export default UseTransitionDemo;
