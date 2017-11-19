function theBeatlesPlay(musicians, instruments){
  var facts = [];

  for (var i = 0; i < musicians.length; i++){
    facts.push(musicians[i] + " plays " + instruments[i]);
  }
  return facts;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;

  while(i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num){
  var newFacts = [];
  do {
    newFacts.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return newFacts;
}
