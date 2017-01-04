function theBeatlesPlay(musicians, instruments){
  var newarray = []
  for (let i = 0; i < musicians.length;i++){
      newarray[i] = `${musicians[i]} plays ${instruments[i]}`
  }
  return newarray
}

function johnLennonFacts(factsarray){
  var i = 0
  while (i < factsarray.length){
    factsarray[i] = `${factsarray[i]}!!!`;
    i++;
  }
  return factsarray
}

function iLoveTheBeatles(number){
  var emptyarray = []
  
    do {
      emptyarray.push("I love the Beatles!")
      number++;
    }

    while (number < 15)

  return emptyarray
}
