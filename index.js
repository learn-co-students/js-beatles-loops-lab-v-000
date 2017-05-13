



  var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
  var instruments = []

function theBeatlesPlay(musicians, instruments){
  var together = [];
  for (var i = 0; i < musicians.length; i++){
      var sentence = musicians[i] + " plays " + instruments[i];
      together.push(sentence);
  }
  return together;
}

function johnLennonFacts(facts){
    const shoutedFacts = []
    let i = 0
    while (i < facts.length) {
      shoutedFacts.push(`${facts[i]}!!!`)
      i++
    }
    return shoutedFacts
}

function iLoveTheBeatles(num){
  var beatleMania = []
  do {
    beatleMania.push("I love the Beatles!")
    num ++;
  } while (num <15);
  return beatleMania;
  }
