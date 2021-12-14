const args = process.argv;
const sum = function(numberOne, numberTwo) {

  numberOne = parseInt(numberOne);
  numberTwo = parseInt(numberTwo);
  
  return numberTwo + numberOne;
};

const result = sum(args[2], args[3]);


console.log(result);

