function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i]);
  };
  return array;
}

function johnLennonFacts(facts){
  var i = 0;
  while (i < facts.length){
    facts[i] = facts[i].concat("!!!");
    i = i + 1;
  };
  return facts;
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!");
    number = number + 1;
  } while (number < 15);
  return array;
}
