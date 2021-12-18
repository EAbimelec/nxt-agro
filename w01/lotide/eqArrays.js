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

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true;
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

