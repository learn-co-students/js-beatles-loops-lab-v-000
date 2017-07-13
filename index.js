function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var array = []
  for (let i = 0; i < arrayOfMusicians.length; i++) {
    array.push(arrayOfMusicians[i] + " plays " + arrayOfInstruments[i]);
  }
  return array;
}

function johnLennonFacts(arrayOfFacts) {
  var i = 0
  var array = []
  while (arrayOfFacts.length > i) {
    array.push(arrayOfFacts[i] + "!!!");
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
