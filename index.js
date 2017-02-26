function theBeatlesPlay(musicians, instruments) {
  let array = []
  for(let i = musicians.length - 1; i >= 0; i--){
    array.unshift(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  let jlfacts = []
  let i = 0
  while (i< facts.length){
    jlfacts.push(facts[i] + "!!!")
    i += 1
  }
  return jlfacts
}

function iLoveTheBeatles(n){
  var love =[]
  do {
    love.push('I love the Beatles!')
    n += 1
  } while (n < 15)
    return love
  }
