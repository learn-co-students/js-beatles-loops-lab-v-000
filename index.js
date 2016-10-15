function theBeatlesPlay(musicians, instruments){
  var arr = [];
  for (var index = 0; index < musicians.length; index++) {
    arr.push(`${musicians[index]}` + ' plays ' + `${instruments[index]}`);
  }
  return arr;
}

function johnLennonFacts(facts){
  var allFacts = [];
  var i = 0;
  while (i < facts.length) {
    allFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return allFacts;
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++;
  } while (num < 15){
    return arr;
  }
}
