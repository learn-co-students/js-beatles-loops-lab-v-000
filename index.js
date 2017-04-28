function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (let i = 0; i < musicians.length && instruments.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  let johnfacts = []
  let i = 0
  while (facts.length > i){

    johnfacts.push(`${facts[i]}!!!`)
    i++
  }
  return johnfacts
}

function iLoveTheBeatles(n) {
  var love = []
  do {
    love.push('I love the Beatles!')
    n++
  } while(n < 15)
  return love
}
