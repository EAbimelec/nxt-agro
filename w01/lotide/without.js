const without = function(array, ...theArgs) {

  let newArray = [];
  
  for (let value of array) {

    //console.log(theArgs.reduce(reducer, value));
    if (!theArgs.includes(value)) {

      newArray.push(value);
    }
  }

  console.log(newArray);
};

//console.log(without([1, 1, 2, 3], 1));
without([1, 2, 3], 1); // => [2, 3]
without(["1", "2", "3"], 1, 2, "3"); // => ["1", "2"]

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true;
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => false

//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);


