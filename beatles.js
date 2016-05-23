function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var musicianInstrumentsArray = []
  for (var i = 0; i < musiciansArray.length; i++) {
    musicianInstrumentsArray.push(musiciansArray[i] + " plays " + instrumentsArray[i])
  }
  return musicianInstrumentsArray;
}

function johnLennonFacts(lennonFacts) {
  var i = 0;
  lennonFactsExclaimation = []
  while (i < lennonFacts.length) {
    lennonFactsExclaimation.push(lennonFacts[i] + "!!!")
    i++;
  }
  return lennonFactsExclaimation;
}

function iLoveTheBeatles(number) {
  var iLoveBeatlesArray = []
  i = number;
  do {
    iLoveBeatlesArray.push("I love the Beatles!");
    i++;
  } while (i < 15)
  return iLoveBeatlesArray;
}