function theBeatlesPlay(musician_array, instrument_array) {
  var beatles = []

  for (let i = 0; i < musician_array.length; i++) {
    beatles.push(`${musician_array[i]} plays ${instrument_array[i]}`)
  }
  return beatles
}

function johnLennonFacts(array) {
  var exclamation_array = []
  while (array.length > 0) {
    exclamation_array.push(`${array.shift()}!!!`)
  }
  return exclamation_array
}

function iLoveTheBeatles(number) {
  var loveStatement = []
  do {
    loveStatement.push(`I love the Beatles!`)
    number++
  } while (number < 15)
  return loveStatement
}