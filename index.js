function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i ++) {
    var string = musicians[i] + " plays " + instruments[i];
    array.push(string);
  }
  return array;
};

function johnLennonFacts(facts) {
  let number = facts.length;
  while (number > 0) {
    facts[number-1] += "!!!"
    number -= 1;
  }
  return facts;
};

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number += 1;
  }
  while (number < 15);
  return array;
};
