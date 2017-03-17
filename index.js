function theBeatlesPlay(musicians,instruments){
  var new_array = []
  for(var i = 0, m = musicians.length; i < m; i++){
    new_array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return new_array
}

function johnLennonFacts(facts){
  var factsLength = facts.length;
  var counter = 0;
  var new_array = [];
  while (counter < factsLength){
    new_array.push(`${facts[counter]}!!!`)
    counter++
  }
  return new_array
}

function iLoveTheBeatles(number){
  var new_array = [];
  do{
    new_array.push("I love the Beatles!")
    number++
  } while (number < 15);
  return new_array
}
