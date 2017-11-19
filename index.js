function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    var musician = musicians[i];
    var instrument = instruments[i];
    array.push(`${musician} plays ${instrument}`);
  }
  return array
}

function johnLennonFacts(facts){
  var new_array = [];
  var countdown = facts.length;
  while (countdown > 0){
    facts.forEach(function(fact){
      new_array.push(fact + "!!!")
      --countdown
    });
  }
  return new_array
}

function iLoveTheBeatles(number){
  var new_array = [];
  do {
    new_array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return new_array;
}
