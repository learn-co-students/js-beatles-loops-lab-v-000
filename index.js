function theBeatlesPlay(musicians, instruments) {
  var array = new Array();
  for (var i = 0; i <= (musicians.length - 1); i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}


function johnLennonFacts(array) {
  var i = 0;
  while (i <= (array.length - 1)) {
    array[i] = array[i] + "!!!";
    i++;
  }
  return array;
}


function iLoveTheBeatles(i) {
  var array = new Array()
  do {
    array.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return array;
}
