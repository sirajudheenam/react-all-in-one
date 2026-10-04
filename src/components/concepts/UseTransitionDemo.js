import React, { useEffect, useState, useTransition } from 'react';

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
    let active = true; // eslint-disable-line no-unused-vars
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
      <div className="App transition-demo">
        <header className="demo-header">
          <div className="demo-header__badge">useTransition</div>
          <h1 className="demo-header__title">useTransition Demo</h1>
          <p className="demo-header__desc">Marks expensive state updates as non-urgent with useTransition to keep the UI responsive.</p>
        </header>
        <input onChange={handleChange} type="text" value={input} placeholder="Filter Pokémon…" />
        {isPending && <span className="pending">Filtering…</span>}
        <ul className="transition-demo-list">
          {filteredPokemon.map((poke) => (
            <li key={poke.name}>{poke.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default UseTransitionDemo;
