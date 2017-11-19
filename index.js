function theBeatlesPlay(musicians, instruments) {
  var newarray = []
  for (var i = 0; i < musicians.length; i++) {
    newarray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newarray;
}

function johnLennonFacts(facts) {
  var newfacts = [];
  var index = 0;

  while (index < facts.length) {
    newfacts.push(`${facts[index]}!!!`);
    index++;
  }
  return newfacts;
}

function iLoveTheBeatles(number) {
  var beatlesarray = [];
  do {
    beatlesarray.push("I love the Beatles!")
    number++;
  } while (number < 15);
  return beatlesarray;
}
