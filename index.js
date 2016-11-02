function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];
  for (var i= 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    beatlesPlay.push(string);
  }
  return beatlesPlay;
}

function johnLennonFacts(facts) {
  var i = 0;
  var newArray = [];
  while (i < facts.length) {
    newArray.push(facts[i] + "!!!");
    i++;
  }
  return newArray;
}

// function johnLennonFacts(facts) {
//   for (var i = 0; i < facts.length; i++) {
//     facts[i] += "!!!";
//   }
//   return facts;
// }

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15); 
  return array;
}
