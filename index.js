function theBeatlesPlay(musicians, instruments) {
  const array = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return array
}

function johnLennonFacts(facts) {
  const theFacts = []

  let i = 0
  while (i < facts.length) {
    theFacts.push(`${facts[i]}!!!`)
    i++
  }

  return theFacts
}

function iLoveTheBeatles(n) {
  const array = []

  do {
    array.push('I love the Beatles!')
    n++
  } while (n < 15)

  return array
}
