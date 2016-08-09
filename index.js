function theBeatlesPlay(musicians, instruments) {
  var pairs = [];
  for ( var i = 0 ; i < musicians.length ; i++ ){
    pairs.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return pairs;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newFacts = [];
  while (i < facts.length) {
    newFacts.push(facts[i] + "!!!");
    i += 1;
  }
  return newFacts;
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    number += 1;
  } while (number < 15);
  return love;
}
