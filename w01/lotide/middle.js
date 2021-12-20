const middle = function(array) {

  if (array.length > 0 && array.length % 2 === 1) {

    let midElement = (array.length / 2) - .5;
    console.log("hola");
    return array[midElement];
  }
    
};

console.log(middle([1, 2, 3, 4]));
