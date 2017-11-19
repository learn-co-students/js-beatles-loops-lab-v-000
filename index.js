function theBeatlesPlay(musiciansArray, instrumentsArray) {
  var array = []
  for (let i = 0, x = musiciansArray.length; i < x; i++) {
    array.push(`${musiciansArray[i]} plays ${instrumentsArray[i]}`)
  }
  return array
}

function johnLennonFacts(factsArray) {
  let i = 0
  var shoutFacts = []

  while (i < factsArray.length) {
    shoutFacts.push(`${factsArray[i]}!!!`)
    i++
  }
  return shoutFacts
}

function iLoveTheBeatles(number) {
  var array = []
  
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  return array;
}


