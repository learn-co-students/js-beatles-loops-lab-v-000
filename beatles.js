function theBeatlesPlay(musicians, instruments){
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(facts) {
  var i = 0;
  var strongFacts = []
  while (facts.length > i){
    strongFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return strongFacts
}

function iLoveTheBeatles(number) {
  var love = [];
  do {
    love.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return love
}
