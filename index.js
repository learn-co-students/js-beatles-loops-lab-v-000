function theBeatlesPlay(musicians, instruments) {
  var sentence = [];
  for (let i = 0; i < musicians.length; i++) {
    sentence.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return sentence;
}

function johnLennonFacts(facts) {
  var n = facts.length;
  while ( n > 0) {
    n -= 1;
    facts[n] = `${facts[n]}!!!`;
  }
  return facts;
}

function iLoveTheBeatles(n) {
  var i = 0;
  var array = [];
  if (n < 15) {
    do {
      ++i;
      array.push("I love the Beatles!");
    } while (i <= n);
  } else {
    array = ["I love the Beatles!"];
  }
  return array
}
