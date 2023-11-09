const solveEinsteinFishPuzzle = () => {
  const nationalities = ['Brit', 'Swede', 'Dane', 'Norwegian', 'German'];
  const colors = ['red', 'green', 'white', 'yellow', 'blue'];
  const beverages = ['tea', 'coffee', 'milk', 'beer', 'water'];
  const cigars = ['Pall Mall', 'Dunhill', 'Blend', 'Bluemaster', 'Prince'];
  const pets = ['dogs', 'birds', 'cats', 'horses', 'fish'];

  // Initialize variables to store the solution
  let solution = '';

  // Iterate over all possible house configurations
  for (let house1 = 1; house1 <= 5; house1++) {
    for (let house2 = 1; house2 <= 5; house2++) {
      if (house2 === house1) continue;
      for (let house3 = 1; house3 <= 5; house3++) {
        if (house3 === house1 || house3 === house2) continue;
        for (let house4 = 1; house4 <= 5; house4++) {
          if (house4 === house1 || house4 === house2 || house4 === house3)
            continue;
          const house5 = [1, 2, 3, 4, 5].find(
            (house) => ![house1, house2, house3, house4].includes(house)
          );

          const houseConfig = [house1, house2, house3, house4, house5];

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
            // Solution found
            solution = `The owner who owns the fish is ${
              nationalities[houseConfig.indexOf('fish')]
            }!`;
            break;
          }
        }
        if (solution !== '') break;
      }
      if (solution !== '') break;
    }
    if (solution !== '') break;
  }

  if (solution === '') {
    solution = 'No solution found.';
  }

  return solution;
};

console.log(solveEinsteinFishPuzzle());
