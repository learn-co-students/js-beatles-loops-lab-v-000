function theBeatlesPlay(musicians, instruments) {
  var array = []

  for(var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var finalArray = [];
  var i = 0
  while (i < facts.length ) {
    finalArray.push(facts[i] + "!!!")
    i++
  }
  return finalArray
}

function iLoveTheBeatles(num) {
  var finalArray = [];
  do {
    finalArray.push("I love the Beatles!")
    num++
  } while (num < 15);
  return finalArray
}
