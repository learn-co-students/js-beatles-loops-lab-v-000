function theBeatlesPlay(musicians, instruments) {
  var someArray = [];
  for(i = 0; i < musicians.length; i ++){
    someArray.push(musicians[i] + " plays " + instruments[i])
  };
  return someArray;
}

function johnLennonFacts(facts) {
  var i = facts.length - 1
  while (i > -1) {
    facts[i] += "!!!";
    i -= 1;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var beatlesCheck = [];
  do {
    beatlesCheck.push("I love the Beatles!")
    n += 1;
  } while(n < 15);
  return beatlesCheck;
}
