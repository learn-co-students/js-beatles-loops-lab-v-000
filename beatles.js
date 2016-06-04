function theBeatlesPlay(musicians, instruments) {
  var collection = [];
  for (let i = 0; i < musicians.length ; i++) {
    collection.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return collection;
}

function johnLennonFacts(facts) {
  var collection = [];
  while (facts.length > collection.length) {
    facts.forEach(function(fact, index) {
      collection.push((fact) + "!!!");
    });
  }
  return collection;
}

function iLoveTheBeatles(n) {
  var collection = [];
  do {
    collection.push("I love the Beatles!");
    n++;
  } while (n < 15);
  return collection;
}