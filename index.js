function theBeatlesPlay(arrayMu, arrayIn) {
  var empty = []
  for (var i = 0; i < arrayMu.length; i++) {

   empty.push( `${arrayMu[i]} plays ${arrayIn[i]}`)

  }
  return empty
}

function johnLennonFacts(factsArray) {
  var em = []
  var p = 0
  while(p < factsArray.length) {

    em.push(`${factsArray[p]}!!!`)
    p++
  }
  return em
}

function iLoveTheBeatles(number) {
  var e = []
  do {
    e.push("I love the Beatles!"),
    number ++
  } while (`${number}` < 15);
  return e
}
