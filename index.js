function theBeatlesPlay(musicians, instruments) {
  var beatles = [];
  for (var i = 0; i < musicians.length; i++) {
    beatles.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return beatles
}

function johnLennonFacts(facts) {
  var i = 0
  var excitedFacts = []
  while (i < facts.length) {
    excitedFacts.push(facts[i] + "!!!")
    i ++
  }
  return excitedFacts
}

function iLoveTheBeatles(num) {
  var beatlesLove = [];
  do {
    beatlesLove.push("I love the Beatles!")
    num ++
  } while (num < 15);
  return beatlesLove;
}
