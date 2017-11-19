function theBeatlesPlay(musicians, instruments) {
  var beatArray = [];
    for (var i = 0; i < musicians.length; i++) {
      beatArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatArray
}

function johnLennonFacts(facts) {
  var i = 0
  var factsArray = [];
    while (facts.length > i) {
      factsArray.push(`${facts[i]}!!!`);
      i++;
  }
  return factsArray
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++
  } while (num < 15);
  return array
}