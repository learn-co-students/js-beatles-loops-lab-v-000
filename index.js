function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    var sentence = `${musicians[i]} plays ${instruments[i]}`;
    arr.push(sentence);
  }
  return arr
}

function johnLennonFacts (facts) {
  var i = 0;
  while (i < facts.length) {
    facts[i++] += "!!!"
  }
  return facts
}

function iLoveTheBeatles(n) {
  var arr = [];
  do {
    arr.push('I love the Beatles!')
    n++
  } while(n < 15);
  return arr
}
