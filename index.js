function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < 4; i++) {
   array.push(`${musicians[i]} plays ${instruments[i]}`) 
  }
  return array
}

function johnLennonFacts(facts) {
  var stuff = []
  let i = 0
  while (i < facts.length) {
    stuff.push(`${facts[i]}!!!`)
    i++
  }
  return stuff
}

function iLoveTheBeatles(number) {
    
    var stuff = []

    do {
      number++
      stuff.push("I love the Beatles!")
    } while (number < 15);

    return stuff
}


