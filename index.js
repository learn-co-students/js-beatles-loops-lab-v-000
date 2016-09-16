function theBeatlesPlay(musicians, instruments) {
  var array = []
  for (var i = 0; i < instruments.length; i++) {
    array[i] = `${musicians[i]} plays ${instruments[i]}`;
  }
  return array;
}

function johnLennonFacts(array) {
  var exclaiming = []
  var i = 0;
  while (i < array.length) {
    exclaiming[i] = (array[i] + "!!!");
    i++;
  }
  return exclaiming;
}

function iLoveTheBeatles(num) {
  var array = []
  do { array.push("I love the Beatles!")
    num++;
  } while (num < 15);
  return array;
}
