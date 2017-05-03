const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  const lennonArray = []
  let i = 0
  while (i < array.length) {
    lennonArray.push(`${array[i]}!!!`)
    i++
  }
  return lennonArray
}

function iLoveTheBeatles(n) {
  const beatlesArray = []
  do {
    beatlesArray.push('I love the Beatles!')
    n++
  }
  while (n < 15)

  return beatlesArray
}
