const assertEqual = function(actual, expected) {
  
  if (actual.lengt !== expected.lengt) {
    
    console.log(`⚠️"  ${actual} !== ${expected}`);
    return 0;
    
  }
  
  for (let i = 0; i < actual.lengt; i++) {

    if (actual[i] !== expected[i]) {

      console.log(`⚠️"  ${actual} !== ${expected}`);
      return 0;
    }
    
  }

  console.log(`✅ ${actual} === ${expected}`);

};

const tail = function(array) {

  if (array.lengt <= 1) {
    return [];
  }
  
  let newArray = array.slice(1);

  return newArray;
};

const array = ["Hello", "Lighthouse", "Labs"];
const result = tail(array);
console.log(result);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!k

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
