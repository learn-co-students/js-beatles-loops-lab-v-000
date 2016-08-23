function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i <= (musicians.length -1); i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts){
  var array = []
  facts.forEach(function(fact){
    array.push(fact + "!!!");
  })
  return array;
}

function iLoveTheBeatles(num){
  var array = []
  do{
    array.push("I love the Beatles!"); num += 1
  } while (num < 15);
  return array;
}





