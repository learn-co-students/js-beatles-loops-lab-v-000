function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];
 for (var i = 0; i < musicians.length; i++) {
   beatlesPlay.push(musicians[i] + " plays " + instruments[i]);
 }
 return beatlesPlay;
}

function johnLennonFacts(facts) {
  for (var i = 0; i < facts.length; i++) {
    facts[i] += "!!!";
  }
  return facts;
}

function iLoveTheBeatles(numb) {
  var loveBeatles = [];
  if (numb < 15) {
    var i = 0;
    do {
       i += 1;
       loveBeatles.push('I love the Beatles!');
    } while (i < numb);
  }
  loveBeatles.push('I love the Beatles!');
  return loveBeatles;
}
