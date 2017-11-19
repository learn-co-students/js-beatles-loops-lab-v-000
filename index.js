function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  var arrayLength = musicians.length;
  for (let i = 0; i < arrayLength; i++) {
    beatles.push(musicians[i] + " plays " + instruments[i]);
  }
  return beatles
}

function johnLennonFacts(facts) {
  var johnLennonBeatHisWife = [];
  var arrayLength = facts.length;
  for (let i = 0; i < arrayLength; i++) {
    johnLennonBeatHisWife.push(facts[i] + "!!!")
  }
  return johnLennonBeatHisWife
}

function iLoveTheBeatles(parameter) {
  var iDontLoveTheBeatles = [];
  do {
    iDontLoveTheBeatles.push("I love the Beatles!");
    parameter++;
  }
  while (parameter < 15);
  return iDontLoveTheBeatles;
}
