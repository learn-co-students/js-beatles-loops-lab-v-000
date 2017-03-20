function theBeatlesPlay(musicians, instruments) {
  var sentences = [];

  for(let i = 0; i < musicians.length; i++) {
    sentences.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return sentences;
}

function johnLennonFacts(facts) {
  var excitingFacts = [];
  var i = 0;

  while(i < facts.length) {
    excitingFacts.push(`${facts[i]}!!!`);
    i++;
  }

  return excitingFacts;
}

function iLoveTheBeatles(count) {
  var newArray = [];

  do {
    newArray.push("I love the Beatles!");
  } while(count-- > 0 && count < 15);

  return newArray;
}


