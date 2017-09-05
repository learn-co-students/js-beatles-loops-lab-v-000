function theBeatlesPlay(musicians, instruments) {
  var musiciansArray = new Array()
  for (var i = 0; i < musicians.length; i++ ){
    musiciansArray[i] = (`${musicians[i]} plays ${instruments[i]}`)
  }
  return musiciansArray
}

function johnLennonFacts(facts_array){
  var i = 0
  while(i < facts_array.length){
    facts_array[i] = `${facts_array[i]}!!!`
    i++
  }
  return facts_array
}

function  iLoveTheBeatles(n){
  var array = []

  do {
    array.push("I love the Beatles!")
    n += 1
  } while (n < 15)
 return array
}