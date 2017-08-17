function theBeatlesPlay(musicians, instruments) {
  const array = []
  for (let i = 0; i < musicians.length; i++) {
      array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(array) {
  let i = 0
  const newArray = []
  while (i < array.length) {
    newArray.push(`${array[i] + "!!!"}`)
    i++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  var array = []
  do {
    array.push("I love the Beatles!")
    number++;
  } while (number < 15)
  return array
}
