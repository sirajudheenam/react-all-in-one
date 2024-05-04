import React, { useState } from 'react';

const PuzzleSolver = () => {
  const [solution, setSolution] = useState('');

  const solvePuzzle = () => {
    const houses = [1, 2, 3, 4, 5];
    const colors = ['red', 'green', 'white', 'yellow', 'blue'];
    const nationalities = ['Brit', 'Swede', 'Dane', 'Norwegian', 'German'];
    const beverages = ['tea', 'coffee', 'milk', 'beer', 'water'];
    const cigars = ['Pall Mall', 'Dunhill', 'Blend', 'Bluemaster', 'Prince'];
    const pets = ['dogs', 'birds', 'cats', 'horses', 'fish'];

    const possibleSolutions = [];

    // Iterate over all possible house configurations
    for (let house1 of houses) {
      for (let house2 of houses) {
        if (house2 === house1) continue;
        for (let house3 of houses) {
          if (house3 === house1 || house3 === house2) continue;
          for (let house4 of houses) {
            if (house4 === house1 || house4 === house2 || house4 === house3)
              continue;
            const house5 = houses.find(
              (house) => ![house1, house2, house3, house4].includes(house)
            );

            const houseConfig = [house1, house2, house3, house4, house5];
            console.log('houseConfig');
            console.log(houseConfig);

            // console.log("nationalities[houseConfig.indexOf('Brit')])");
            // console.log(nationalities[houseConfig.indexOf('Brit')]);

            // Check if the current house configuration satisfies all the puzzle rules
            if (
              nationalities[houseConfig.indexOf('Brit')] === 'red' &&
              pets[houseConfig.indexOf('Swede')] === 'dogs' &&
              beverages[houseConfig.indexOf('Dane')] === 'tea' &&
              colors[houseConfig.indexOf('green')] === 'white' &&
              beverages[houseConfig.indexOf('green')] === 'coffee' &&
              cigars[houseConfig.indexOf('birds')] === 'Pall Mall' &&
              cigars[houseConfig.indexOf('yellow')] === 'Dunhill' &&
              beverages[houseConfig.indexOf('milk')] === 'milk' &&
              nationalities[houseConfig.indexOf('Norwegian')] === 'first' &&
              Math.abs(
                houseConfig.indexOf('Blend') - houseConfig.indexOf('cats')
              ) === 1 &&
              Math.abs(
                houseConfig.indexOf('horse') - houseConfig.indexOf('Dunhill')
              ) === 1 &&
              beverages[houseConfig.indexOf('Bluemaster')] === 'beer' &&
              cigars[houseConfig.indexOf('German')] === 'Prince' &&
              Math.abs(
                houseConfig.indexOf('Norwegian') - houseConfig.indexOf('blue')
              ) === 1 &&
              (cigars[houseConfig.indexOf('Blend')] === 'cats' ||
                beverages[houseConfig.indexOf('Blend')] === 'water')
            ) {
              console.log(houseConfig);

              possibleSolutions.push(houseConfig);
            }
          }
        }
      }
    }

    // Find the owner who owns the fish
    const fishOwner = possibleSolutions.find(
      (solution) => pets[solution.indexOf('fish')] === 'fish'
    );

    if (fishOwner) {
      setSolution(
        `The owner who owns the fish is ${
          nationalities[fishOwner.indexOf('fish')]
        }!`
      );
    } else {
      setSolution('No solution found.');
    }
  };

  return (
    <div>
      <h2>Einstein's Riddle Solver</h2>
      <button onClick={solvePuzzle}>Solve Puzzle</button>
      <p>{solution}</p>
    </div>
  );
};

export default PuzzleSolver;
