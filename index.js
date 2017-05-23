function theBeatlesPlay(musicians, instruments) {
  var array = [];
  var i;
  for(i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var johnFacts = [];
  let i = 0;
  while (i < facts.length) {
    johnFacts.push(`${facts[i]}!!!`)
    i++
  }
  return johnFacts
}

function iLoveTheBeatles(number) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!")
    number++
  }
  while
    (number < 15)
  return beatles
}
