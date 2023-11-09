import React from 'react';
import { useBearStore } from './zustandStore';

function BearCounter() {
  const bears = useBearStore((state) => state.bears);
  return <h1>{bears} around here ...</h1>;
}
function Controls() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const decreasePopulation = useBearStore((state) => state.decreasePopulation);
  const removeAllBears = useBearStore((state) => state.removeAllBears);
  return (
    <>
      <button onClick={increasePopulation}> + </button>
      <button onClick={removeAllBears}>Clear</button>
      <button onClick={decreasePopulation}> - </button>
    </>
  );
}

export function BearComponent() {
  return (
    <>
      <BearCounter />
      <Controls />
    </>
  );
}
