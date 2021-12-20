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

const flatten = function(...toFlat) {

  let newArray = [toFlat[0]];
  for (let i = 0; i < toFlat.length - 1; i++) {

    newArray = newArray.concat(toFlat[i + 1]);
  }

  return newArray;
};

console.log(flatten('hello', 333, [1, 2, 3, 56], [2, 2, 2], 66));


