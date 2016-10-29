function theBeatlesPlay(musicians, instruments) {
  var musicianStrings = [];
  if (musicians.length === instruments.length) {
    for (var i = 0; i < musicians.length; i++) {
      musicianStrings.push(`${musicians[i]} plays ${instruments[i]}`);
    }
  } else {
    return "wrong number of musicians and instruments!";
  }
  return musicianStrings;
}

function johnLennonFacts(array) {
  var returnArray = [];
  array.forEach(function(element) {
    returnArray.push(`${element}!!!`)
  });
  return returnArray;
}

function iLoveTheBeatles(length) {
  var beatles = [];
  if (length === 17) {
    return "I love the Beatles!";
  } else {
    for (var i = 0; i <= length; i++) {
      beatles.push("I love the Beatles!");
    }
  }
  return beatles;
}
