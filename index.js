function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

function johnLennonFacts(facts) {
  let n = 0
  while (n < facts.length) {
    facts[n] = facts[n] + "!!!";
    n++;
  }
  return facts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do { 
    array.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return array;
}