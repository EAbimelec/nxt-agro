// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);

  } else {
    console.log(`⚠️"  ${actual} !== ${expected}`);

  }

};

const eqArrays = function(actual, expected) {

  let isEqual = true;
  for (let i = 0; i < actual.length; i++) {
    
    if (actual[i] !== expected[i]) {
      isEqual = false;
    }
  }

  return isEqual;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true;
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);

