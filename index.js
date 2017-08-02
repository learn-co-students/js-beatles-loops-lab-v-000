function theBeatlesPlay(musicians, instruments) {
  const myArray = []

  for (let i = 0, m = musicians.length; i < m; i++) {
    myArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return myArray
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
  const myArray = []

  do {
    myArray.push('I love the Beatles!')
    n++
  } while (n < 15)
  return myArray
}