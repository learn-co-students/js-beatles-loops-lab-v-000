function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
};

function johnLennonFacts(facts) {
  const newFacts = []
  let i = 0
  while (facts.length > i) {
    newFacts.push(`${facts[i]}!!!`)
    i++
  }
  return newFacts
};

function iLoveTheBeatles(number) {
  const array = []
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15)
  return array
}
