//Functions implementation
const getArguments = function() {
  
  // Get raw arguments
  let args = process.argv;

  if (args.length < 3) {
    console.log("No data");
    args = '';
    return 0;
  } else {

    return args = args.slice(2);
  }
};

const pigLatinFunction = function(args) {
  
  let pigLatinTraduction = '';
  for (let i = 0; i < args.length; i++) {
    pigLatinTraduction += ` ${pigLatinTranslator(args[i])}`;
  }
  console.log(pigLatinTraduction);
};

const pigLatinTranslator = function(word) {

  let pLWord = word.slice(1);
  pLWord += word.charAt(0);
  pLWord += 'ay';
  return pLWord;
};


let args = getArguments();
pigLatinFunction(args);
