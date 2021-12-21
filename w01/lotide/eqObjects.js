const eqArrays = function(actual, expected) {

    if (actual.length !== expected.length) {
        return false;
    } 

    let isEqual = true;
    for (let i = 0; i < actual.length; i++) {
      
      if (actual[i] !== expected[i]) {
        isEqual = false;
      }
    }
  
    return isEqual;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

    let obj1Keys = Object.keys(object1);
    let obj2Keys = Object.keys(object2);
    

    if (obj1Keys.length === obj2Keys.length) {

        for (const key of obj1Keys) {

            let equal = false;
            for (const item of obj2Keys) {

                if (key === item && object1[key] === object2[key]) {
                    
                    equal = true;
                } else if (typeof object1[key] === typeof object2[key] && typeof object1[key] === 'object'){
        
                    equal = eqArrays(object1[key], object2[key]);
                }

            }

            if (equal === false) {
                return "Are not equal";
            }
            // console.log(key);
        }
        return true;
    } else {
        
        return "Are not equal";
    }
};


let obj = {a : 1, b : 2, c : [2, 2, 1]};
let obj2 = {b : 2, a : 1, c : [2, 2, 1]};

// console.log(`${obj['c']} | ${obj2['c']}`)

console.log(eqObjects(obj, obj2));