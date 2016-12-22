function theBeatlesPlay(musicians, instruments) {
  var strings = [];
  for (var i = 0; i < musicians.length; i++) {
    strings.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return strings;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(x) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    x++;
  } while (x < 15);
  return love;
}
