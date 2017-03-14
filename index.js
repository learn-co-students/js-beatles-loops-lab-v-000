function theBeatlesPlay(musicians, instruments) {
  let information = [];
  for (let i = 0; i < musicians.length; i++) {
    information = [...information, `${musicians[i]} plays ${instruments[i]}`];
  }
  return information;
}

function johnLennonFacts(facts) {
  let array = [];
  let i = 0;
  while (i < facts.length) {
    array[i] = `${facts[i]}!!!`;
    i++;
  }
  return array;
}

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return array;
}
