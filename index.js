function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
      array.push(musicians[i] + " plays " + instruments[i]);
  }
  return array;
}

function johnLennonFacts(facts) {
  let punctuatedFacts = [];
  let i = 0;
  while(i < facts.length){
    punctuatedFacts.push(`${facts[i]}!!!`);
    i++;
  };
  return punctuatedFacts;
}

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push("I love the Beatles!")
    number++
  } while (number < 15);
  return array;
}
