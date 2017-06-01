function theBeatlesPlay(musicians, instruments) {
  var sentence = []
  for (let i = 0; i < musicians.length; i++) {
    sentence.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return sentence
}

function johnLennonFacts(facts) {
  var count = 0
  var array = []
    while (count < facts.length) {
      array.push(facts[count] + "!!!")
      count++
    }
    return array
}

function iLoveTheBeatles(number) {
  var arr = []
  do {
    arr.push('I love the Beatles!')
    number++
  }
    while
      (number < 15)
  return arr
}
