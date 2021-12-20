// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log(`✅ ${actual} === ${expected}`);

  } else {
    console.log(`⚠️"  ${actual} !== ${expected}`);

  }

};

const countOnly = function(allItems, itemsToCount) {

  const results = {};

  for (const item in itemsToCount) {

    let count = 0;

    for (const name of allItems) {

      if (name === item && itemsToCount[name] === true) {

        console.log(name + " | " + item);
        count++;
      }
    }

    if (count > 0) {
      results[item] = count;
    }

  }

  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
