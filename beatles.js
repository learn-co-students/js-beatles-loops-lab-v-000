function theBeatlesPlay(musicians, instruments) {
  var beatlesStatements = [];

  for (let i = 0; i < musicians.length; i++) {
    beatlesStatements.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return beatlesStatements;
}

function johnLennonFacts(facts) {
  var i = 0;

  while (i < facts.length) {
    facts[i] += "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles(number) {
  var love = [];

  do {
    love.push("I love the Beatles!");
    number++;
  } while (number < 15);

  return love;
}