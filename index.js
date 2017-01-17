function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var x = 0; x < musicians.length; x++) {
    band.push(`${musicians[x]} plays ${instruments[x]}`);
  }
  return band;
}

function johnLennonFacts(factsArray) {
  var x = 0;
  while (x < factsArray.length) {
    factsArray[x] += "!!!";
    x++;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
    var chant = [];
    var i = 0;
    do {
        chant.push("I love the Beatles!");
        i++;
    } while (i <= num);
    if (num > 15) {
        return chant.slice(0,1);
    } else {
        return chant;
    }
}


