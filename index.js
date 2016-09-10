function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  var i = facts.length
  while (i >= 0) {
    array.push(`${facts[i]}!!!`)
    i--
  }
  array.shift()
  return array.reverse()
}

function iLoveTheBeatles(number) {
  var array = []
  if (number < 15) {
    for(var i = 0; i <= number; i++)
      array.push("I love the Beatles!")
  } else {
    array.push("I love the Beatles!")
  }
  return array
}