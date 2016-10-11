function theBeatlesPlay(musicians, instruments) {
  var paired = [];
  var i;
  for (i = 0; i < musicians.length; i++) {
    paired.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return paired;
}

function johnLennonFacts(facts) {
  var allFacts = [];
  var i = 0;

  while (i < facts.length) {
    allFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return allFacts
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    number++;
  } while (number < 15) {
    return emptyArray;
  }
}
