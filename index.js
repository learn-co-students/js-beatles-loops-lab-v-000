function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return beatles;
}

function johnLennonFacts(facts) {
  var jlFacts = [];
  var i = 0;
  while (i < facts.length) {
    jlFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return jlFacts;
}

function iLoveTheBeatles(num) {
  var beatleLove = [];
  do {
    beatleLove.push("I love the Beatles!");
    num++;
  }
  while (num < 15);
  return beatleLove;
}
