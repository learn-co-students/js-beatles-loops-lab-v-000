function theBeatlesPlay(musicians, instruments) {
  var emptyArray = [];
  for (let i = 0; i < musicians.length; i++) {
    emptyArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return emptyArray;
}

function johnLennonFacts(facts) {
  var emptyArray = [];
  let i = 0;
  while (i < facts.length) {
    emptyArray.push(`${facts[i]}!!!`);
    i++;
  }
  return emptyArray
}

function iLoveTheBeatles(number) {
  var emptyArray = [];
  do {
    emptyArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return emptyArray
}
