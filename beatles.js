function theBeatlesPlay(musicians, instruments) {
  var musicianPlays = [];

  for(i=0; i<musicians.length; i++) {
    var playing = musicians[i] + " plays " + instruments[i];
    musicianPlays.push(playing);
  }

  return musicianPlays;
}

function johnLennonFacts(factsArray) {
  var factsArrayWithExclamations = [];

  while(factsArray.length > 0) {
    var currFact = factsArray[0] + "!!!";
    factsArrayWithExclamations.push(currFact);
    factsArray.splice(0, 1);
  }

  return factsArrayWithExclamations;
}

function iLoveTheBeatles(number) {
  var loveBeatlesArray = [];
  do {
    loveBeatlesArray.push("I love the Beatles!");
    number += 1;
  } while(number < 15);
  return loveBeatlesArray;
}
