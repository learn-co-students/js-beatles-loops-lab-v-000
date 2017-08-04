function theBeatlesPlay(musicians, instruments){
  var array = []
  for(var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array
}

function johnLennonFacts(facts){
  var new_array = facts
  for(var i = 0; i < facts.length; i++){
    new_array[i] += "!!!"
  }
  return new_array
}

function iLoveTheBeatles(number){
  var new_array = []
  do{
    new_array.push("I love the Beatles!")
    number++
  }while(number < 15)
  return new_array
}
