function theBeatlesPlay(musicians, instruments) {
  var musiciansAndTheirInstruments = [];
  for(let i = 0; i < musicians.length; i++) {
    var string = `${musicians[i]} plays ${instruments[i]}`;
    musiciansAndTheirInstruments.push(string);
  }

  return musiciansAndTheirInstruments;
}

function johnLennonFacts(facts){
  var i = 0;
  while(i < facts.length) {
    facts[i] = facts[i] + "!!!";
    console.log(i++)
  }

  return facts;
}

function iLoveTheBeatles(num) {
  var beatlesLove = [];

  do {
    beatlesLove.push("I love the Beatles!");
    console.log(++num);
  } while (num < 15);

  return beatlesLove;
}
