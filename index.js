function theBeatlesPlay(musicians, instruments) {
  var members = [];
  for (let i = 0; i < musicians.length; i++) {
    members.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return members;
}

function johnLennonFacts(facts) {
  var factArray = [];
  var i = 0;
  while (i < facts.length) {
    factArray.push(`${facts[i]}!!!`);
    i++;
  }
  return factArray;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
