
// Create an array to represent the houses 
let houses = [1, 2, 3, 4, 5];

// Create an array to represent the colors 
let colors = ["red", "green", "white", "yellow", "blue"];

// Create an array to represent the nationalities 
let nationalities = ["Brit", "Swede", "Dane", "Norwegian", "German"];

// Create an array to represent the beverages 
let beverages = ["tea", "coffee", "milk", "beer", "water"];

// Create an array to represent the cigars 
let cigars = ["Pall Mall", "Dunhill", "Blend", "Bluemaster", "Prince"];

// Create an array to represent the pets 
let pets = ["dogs", "birds", "cats", "horses", "fish"];

// Create a function to check if a given configuration satisfies the puzzle rules 
function isSolutionValid(houseConfig) 
{ 
    // Rule 1: The Brit lives in the red house 
    if (nationalities[houseConfig.indexOf("Brit")] !== "red") { 
        return false; 
    }

    // Rule 2: The Swede keeps dogs as pets 
    if (pets[houseConfig.indexOf("Swede")] !== "dogs") { 
        return false; 
    }

    // Rule 3: The Dane Drinks tea 
    if (beverages[houseConfig.indexOf("Dane")] !== "tea") { 
        return false; 
    }

    // Rule 4: The Green house is on the left of the White house 
    if ( houseConfig.indexOf("green") >= houseConfig.indexOf("white") || houseConfig.indexOf("green") === -1 || houseConfig.indexOf("white") === -1 ) { 
        return false;
    }

    // Rule 5: The Green home owner drinks coffee 
    if (beverages[houseConfig.indexOf("green")] !== "coffee") { 
        return false; 
    }

    // Rule 6: The person who smokes Pall Mall rears birds 
    if (cigars[houseConfig.indexOf("birds")] !== "Pall Mall") { 
        return false; 
    }

    // Rule 7: The owner of the yellow house smokes Dunhill 
    if (cigars[houseConfig.indexOf("yellow")] !== "Dunhill") { 
        return false; 
    }

    // Rule 8: The man living in the center drinks milk 
    if (beverages[houseConfig.indexOf("milk")] !== "milk") { 
        return false; 
    }

// Rule 9: The Norwegian lives in the first house 
if (nationalities[houseConfig.indexOf("Norwegian")] !== "first") { 
    return false; 
}

// Rule 10: The man who smokes Blend lives next to the one who keeps cats 
if ( Math.abs( houseConfig.indexOf("Blend") - houseConfig.indexOf("cats") ) !== 1 ) { 
    return false; 
}

// Rule 11: The man who keeps the horse lives next to the man who smokes Dunhill 
if ( Math.abs( houseConfig.indexOf("horse") - houseConfig.indexOf("Dunhill") ) !== 1 ) {
     return false;
     }

// Rule 12: The owner who smokes Bluemaster drinks beer if (beverages[houseConfig.indexOf("Bluemaster")] !== "beer") { return false; }

// Rule 13: The German smokes Prince 
if (cigars[houseConfig.indexOf("German")] !== "Prince") { 
    return false; 
}

// Rule 14: The Norwegian lives next to the blue house
