function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for(var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  for(var i = 0; i < facts.length; i++) {
    facts[i] = facts[i] + "!!!";
  }
  return facts
}

function iLoveTheBeatles(num) {
  var newArray =[];
  do {
    newArray.push("I love the Beatles!");
    num++;
  } while(num < 15);

  return newArray;
}