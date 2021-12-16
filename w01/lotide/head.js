// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);

  } else {
    console.log(`⚠️"  ${actual} !== ${expected}`);

  }

};

const head = function(array) {
  
  if (array.length === 0) {
    console.log("The array is empty");
    
    return 0;
  }

  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
