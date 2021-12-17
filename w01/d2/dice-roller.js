const getNumber = function() {

  return process.argv[2];
};

const getDiceNumber = function(number) {
  
  let diceNumbers = `Rolled ${number} dice: `;

  for (let i = 0; i < number; i++) {
    
    let randNumber;

    randNumber = Math.random() * (6 - 1) + 1;
    randNumber = Math.ceil(randNumber);
    diceNumbers += randNumber;

    if (i < number - 1) {
      
      diceNumbers += ', ';
    }
    
  }

  return diceNumbers;
};

console.log(getDiceNumber(getNumber()));
