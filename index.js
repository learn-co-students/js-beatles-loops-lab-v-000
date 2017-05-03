function theBeatlesPlay(musicians, instruments) {
  var newArray = new Array();
  for (let i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`)
    // console.log(musicians[i])
    // newArray.push(musicians[i] + " plays " + instruments[i])
  }
  return newArray
}

function johnLennonFacts(facts) {
  let newArray = []
  let i = 0
  while (facts.length > newArray.length) {
    newArray.push(facts[i] + "!!!")
    i++
  }
  return newArray
}

function iLoveTheBeatles(number) {
  let newArray = []
  do {
    newArray.push("I love the Beatles!")
  } while (number >= newArray.length && number <= 15)
  return newArray
}