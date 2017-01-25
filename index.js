function theBeatlesPlay(arrMus, arrInstr) {
  var band = []
  for (let i = 0, l = arrMus.length; i < l; i++) {
    band.push(`${arrMus[i]} plays ${arrInstr[i]}`)
  }
  return band
}

function johnLennonFacts(facts) {
  var truth = []
  var i = 0
  while(i < facts.length) {
    truth.push(`${facts[i]}!!!`)
    i++
  }
  return truth
}

function iLoveTheBeatles(number) {
  var arr = []
  do {
    arr.push("I love the Beatles!")
    number++
  } while (number < 15)
  return arr
}
