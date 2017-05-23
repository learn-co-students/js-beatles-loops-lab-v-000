
function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts) {
  var newArray = []
  var i = 0
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!")
    i += 1
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number += 1
  } while (number < 15)
  return newArray
}
