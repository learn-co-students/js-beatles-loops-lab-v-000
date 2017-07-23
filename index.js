function theBeatlesPlay(musicians, instruments) {
  var emptyArray = []

  for (let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return emptyArray
}

function johnLennonFacts(arrayOfFacts) {
  var newArray = []

  let count = 0
  while (count < arrayOfFacts.length) {
    newArray.push(`${arrayOfFacts[count]}!!!`)
    count++
  }

  return newArray
}

function iLoveTheBeatles(n) {
  var emptyArray = []

  do {
    emptyArray.push("I love the Beatles!")
    n++
  } while (n < 15)

  return emptyArray
}
