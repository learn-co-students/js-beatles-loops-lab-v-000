function theBeatlesPlay(musicians, instruments) {
  const musiciansAndTheirInstruments = [];

  for(let i = 0; i < musicians.length; i++) {
    musiciansAndTheirInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }

  return musiciansAndTheirInstruments;
}

function johnLennonFacts(facts){
  let i = 0;

  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }

  return facts;
}

function iLoveTheBeatles(num) {
  const beatlesLove = [];

  do {
    beatlesLove.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return beatlesLove;
}

// A good look at the WHY of using `let`, `const`, and `var`.
// https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75#.gyp6ps7o3
