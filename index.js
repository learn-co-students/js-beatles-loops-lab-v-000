function theBeatlesPlay(musicians, instruments) {
  var array = []

  for (let i = 0, x = musicians.length; i < x; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return array
}

function johnLennonFacts(facts) {
  var i = 0
  var shoutedFacts = []

  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(num) {
  var array = []
  do {
    array.push("I love the Beatles!")
    num++
  } while (num < 15);
  return array;
}
