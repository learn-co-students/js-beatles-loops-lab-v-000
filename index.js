//function for the Beatles.
//should accept two arguments, establish an empty array variable, and for loop throughthe full list of the musicians length within the array

function theBeatlesPlay(musicians, instruments) {
  var artistInstrument = [];

  for (let i = 0; i < musicians.length; i++) {
    artistInstrument.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return artistInstrument

}

//function to house johnLennonFacts.
//should accept an array of strings and loop through. finally adding an exclamation point at the end of the loop

function johnLennonFacts(facts) {
  var factList = [];
  var i = 0
  while (i < facts.length) {
    factList.push(facts[i] + "!!!")
    i += 1
  }
  return factList
}

//Below accomplishes the same goal but instead uses a for loop
// function johnLennonFacts(facts) {
//   for (let i = 0; i < facts.length; i++) {
//     facts[i] = `${facts[i]}!!!`;
//   }
//   return facts;
// }

//creating a function for iLoveTheBeatles function
//should accept a number as a parameter. body should create a variable that stores an empty array. usea a do while loop inside the function. increment until less than 15.
function iLoveTheBeatles(number) {
  var numArray = [];

  do {
    numArray.push("I love the Beatles!");
    number += 1
  } while (number < 15) {
    return numArray;
  }
}