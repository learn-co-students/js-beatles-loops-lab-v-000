function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++){
    array.push(musicians[i] + " plays " + instruments[i])
  }
  return array
};

function johnLennonFacts(facts){
  var i = facts.length;
  var a = 0;
  var array = [];
  while (i > a){
    array.push(facts[a++] + "!!!")
  }
  return array
};

function iLoveTheBeatles(number){
  var array = [];
  do {
    array.push("I love the Beatles!")
  } while (++number < 15);
  return array
};
