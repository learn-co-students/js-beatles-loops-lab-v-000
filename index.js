function theBeatlesPlay(musicians, instruments){
  var array = []
  for (var i = 0; i < musicians.length; i++){
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  var i = 0;
  while (i < facts.length) {
    newFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  var fanMessage = [];
  var i = 0
  do {
    if (num < 7) {
      fanMessage.push("I love the Beatles!");
      i++;
      return fanMessage;
    }
  } while (num < 15);
  return "I love the Beatles!"
}
