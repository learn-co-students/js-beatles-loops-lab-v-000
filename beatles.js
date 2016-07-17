function theBeatlesPlay(musicians, instruments) {
  var array = [];
  musicians.forEach(function(musician, index) {
    array.push(musician + " plays " + instruments[index]);
  })
  return array;
}

function johnLennonFacts(facts) {
  var newFacts = [];
  facts.forEach(function(fact) {
    newFacts.push(fact + "!!!")
  })
  return newFacts;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    ++number;
  } while (number < 15)
  return array;
}
