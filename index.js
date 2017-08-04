function theBeatlesPlay(musicians, instruments){
  var theBand = []

  for(let i = 0; i < musicians.length; i++){
    theBand.push(`${musicians[i]} plays ${instruments[i]}`)
  }

  return theBand;
}

function johnLennonFacts(facts){
  var bangFacts = []
  var i = 0

  while(i < facts.length){
    bangFacts.push(`${facts[i]}!!!`)
    i++;
  }

  return bangFacts
}

function iLoveTheBeatles(i){
  var love = []

  do{
    love.push("I love the Beatles!")
    i++
  } while(i < 15)

  return love
}
