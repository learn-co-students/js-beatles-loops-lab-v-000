//theBeatlesPlay
//two parameters: musicians, instruments
//function with empty array to store returned strings
//function with for loop
//create sentence: first index musician, first index instrument
// => "John Lennon plays guitar"
//push into array
//return array

function theBeatlesPlay(musicians, instruments) {
  var bandList = [];
  for (let i = 0; i<musicians.length; i++) {
    var nameAndInstrument = musicians[i] + " plays " + instruments[i];
    bandList.push(nameAndInstrument);
  }
  return bandList;
}

//johnLennonFacts
//one paramater: array of facts
//while loop add "!!!" to each string
//return array of string with "!!!"

function johnLennonFacts(facts) {
  var exclamatoryFacts = [];
  loopNumber = 0;
  while(loopNumber < facts.length) {
    var updatedFact = facts[loopNumber] + "!!!";
    loopNumber++;
    exclamatoryFacts.push(updatedFact);
  }
  return exclamatoryFacts;
}

//iLoveTheBeatles
//one parameter: number
//function with empty array
//do-while loop
//adds "I love the Beatles!"
//increment the number param; condition is number param < 15
//return array

function iLoveTheBeatles(number) {
  var loveArray = [];
  do {
    loveArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return loveArray;
}
