function theBeatlesPlay(musicians, instruments) {
  var memberInstruments = new Array ();
  for (let i = 0; i < musicians.length; i++) {
    memberInstruments.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return memberInstruments;
}

function johnLennonFacts(facts) {
  let count = 0;
  while (count < facts.length) {
    facts[count] = facts[count] + "!!!";
    count++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var beatlesLove = new Array();
  do {
    beatlesLove.push('I love the Beatles!');
    num++;
  } while (num < 15);
  return beatlesLove;
}