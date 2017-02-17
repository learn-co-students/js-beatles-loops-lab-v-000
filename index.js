function theBeatlesPlay(musicians, instruments) {
  var newArray = []
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return newArray
}

function johnLennonFacts(array) {
  var counter = 0
  var newArray = []
  while (counter < array.length) {
    newArray.push(`${array[counter]}!!!`)
    counter++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var newArray = []
  do {
    newArray.push("I love the Beatles!")
    number++
  } while (number < 15);
  return newArray
}
