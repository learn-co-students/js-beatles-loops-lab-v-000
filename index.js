function theBeatlesPlay(musicians, instruments) {
  var result = []
  for (var i = 0; i < musicians.length && i < instruments.length; i++) {
    result.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return result
}

function johnLennonFacts(array){
  return array.map(fact => fact + "!!!");
}

function iLoveTheBeatles(times) {
  var result = []
  do {
    result.push("I love the Beatles!")
    times += 1
  } while (times < 15);
  return result;
}
