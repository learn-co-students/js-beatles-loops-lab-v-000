function theBeatlesPlay(musiciansArray, instrumentsArray) {
  playsArray = [];
  for (var i = 1; musiciansArray.length >= i; i++) {
    playsArray.push(`${musiciansArray[i - 1]} plays ${instrumentsArray[i - 1]}`);
  }
  return playsArray;
}

function johnLennonFacts(factsArray) {
  var theFacts = [];
  var i = 0;
  while (factsArray.length > i) {
    theFacts.push(factsArray[i] + "!!!");
    i++
  }
  return theFacts;
}

function iLoveTheBeatles(number) {
  myArray = [];
  do {
    myArray.push("I love the Beatles!");
    number++
  } while (number < 15);
  return myArray
}
