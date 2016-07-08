function theBeatlesPlay(musicians, instruments) {
  var arr = [];
  for (var i = 0; i < musicians.length; i++) {
    arr.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return arr;
}

function johnLennonFacts(facts) {
  var i = 0;
  var fArray = [];
  while (facts.length > i) {
    fArray.push(facts[i] + "!!!");
    i++;
  }
  return fArray;
}

function iLoveTheBeatles(number) {
  var arr = [];
  do {
    arr.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return arr;
}