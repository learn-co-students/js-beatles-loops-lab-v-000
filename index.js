function theBeatlesPlay(musicians, instruments) {
  const newStrings = [];
  for(let i = 0; i < musicians.length; i++) {
    newStrings.push(musicians[i] + " plays " + instruments[i]);
  }
  return newStrings
};

function johnLennonFacts(facts) {
  const excitedFacts = []
  let i = 0
  while(i < facts.length) {
    excitedFacts.push(facts[i] + "!!!")
    i++
  }
  return excitedFacts
};

function iLoveTheBeatles(number) {
  const array = [];
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
    
  return array
};