function theBeatlesPlay(musicians, instruments) {
  var values = [];

  musicians.forEach(function(musician, index) {
    values.push(`${musician} plays ${instruments[index]}`);
  })

  return values;
}

function johnLennonFacts(facts) {
  var start = 0;

  while ( start < facts.length ) {
    facts[start] += "!!!";
    start ++;
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var values = [];

  do {
    values.push("I love the Beatles!");
    num ++;
  } while (num < 15)

  return values;
}
