// Get raw arguments
let args = process.argv;
//Functions implementation
const getArguments = function() {

  if (args.length < 3) {
    console.log("No data");
    args = '';
    return 0;
  } else {

    args = args.slice(2);
  }

};

const reverseFunction = function() {
  
  if (args.length === '') {
    return 0;
  }
  for (let i = 0; i < args.length; i++) {

    reverseArgument(args[i]);
  }
};

const reverseArgument = function(arg) {

  let reverseArg = '';
  for (let i = arg.length; i > 0; i--) {

    reverseArg += arg[i - 1];
  }

  console.log(`${reverseArg}`);
};

getArguments();
reverseFunction();

