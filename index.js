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
  var i = 0
  
  if (number >= 15){
    emptyarray[0] = "I love the Beatles!"
  }
  else{

    do {
      emptyarray[i] = "I love the Beatles!";
      i++;
    }

    while (i <= number)
  }
  
  return emptyarray
}