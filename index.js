function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < (musicians.length); i++) {
    var newString = musicians[i] + " plays " + instruments[i];
    array.push(newString);
  }
  return array
}

function johnLennonFacts(facts) {
  var array = []
  for(var i = 0; i < facts.length; i++) {
    var string = facts[i] + "!!!"
    array.push(string)
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!")
    number++
  }
  while(number < 15) {
    return array
  }
}
