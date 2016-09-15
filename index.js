function theBeatlesPlay(musicians, instruments) {
  var empty_array = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    empty_array.push(string);
  }
  return empty_array;
}

function johnLennonFacts(facts) {
  var i = 0;
  var new_array = [];
  while (i < facts.length) {
    new_array.push(facts[i] + "!!!");
    i++;
  }
  return new_array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}