function theBeatlesPlay(musicians, instruments){
  var musiciansInstruments = new Array();

  for(var i = 0; i < musicians.length; i++) {
    musiciansInstruments.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return musiciansInstruments;


}

function johnLennonFacts(facts) {
  var counter = 0;
  while (counter < facts.length) {
    facts.splice(counter, 1, `${facts[counter]}!!!`);
    counter++;
  }
  return facts
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    num++
    array.push("I love the Beatles!")

  }
  while (num < 15);
    return array;

}
