function theBeatlesPlay(musicianArr, instArr) {
  var ensemble = [];
  for (var i = 0; i < musicianArr.length; i++) {
    ensemble.push(`${musicianArr[i]} plays ${instArr[i]}`);
  }
  return ensemble;
}

function johnLennonFacts(factsArr) {
  var i = 0;
  var array = [];
  while (i < factsArr.length) {
    array.push(`${factsArr[i]}!!!`);
    i++;
  }
  return array; 
}

function iLoveTheBeatles(num) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array
}
