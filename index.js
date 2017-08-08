function theBeatlesPlay(musicians, instruments) {
  var array = []
    for (let i = 0; i < musicians.length; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
    }
    return array
  }

function johnLennonFacts(facts) {
  let countdown = 0
  var array = []
  while (countdown != facts.length) {
    console.log(++countdown)
    array.push(`${facts[countdown - 1]}!!!`)
  }
  return array
}

function iLoveTheBeatles(n) {
  var array = []
  do {
    array.push('I love the Beatles!')
    console.log(n++)
  } while (n < 15);
  return array
}
