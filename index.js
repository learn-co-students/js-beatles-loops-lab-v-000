function theBeatlesPlay(musicians, instruments) {
  var emptyness = []
  for (var i = 0, l = musicians.length; i < l; i++) {
    var sentence = musicians[i] + " plays " + instruments[i];
    emptyness.push(sentence);
  }
  return emptyness;
}

function johnLennonFacts(facts) {
  var arr = [];
  var i = 0
  while (i < facts.length) {
    arr.push(facts[i] + "!!!");
    i++;
  }
  return arr;
}

function iLoveTheBeatles(number) {
  var arr = []
  do {
    arr.push("I love the Beatles!");
    number++
  } while (number < 15);
  return arr;
}