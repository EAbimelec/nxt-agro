const countLetters = function(string) {
  
  const result = {};

  let letters = new Set(string.split(''));
  letters = [...letters];
  
  for (const letter of letters) {

    let count = 0;

    for (const char of string) {
      
      if (char === letter) {

        count++;
      }

    }

    console.log(letter);
    result[letter] = count;
  }
  
  return result;
};

console.log(countLetters('hlppolaa'));
