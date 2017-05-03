//theBeatlesPlay(musicians, instruments);
function theBeatlesPlay(musicians, instruments) {
  var a = [];
  var i;
  for (i = 0; i <= instruments.length-1 && musicians.length-1; i++) {
    a.push(musicians[i] +" plays "+ instruments[i]);
  }
  return a;
}
//johnLennonFacts(array);
function johnLennonFacts(array) {
  var a = [];
  var i = 0;
  while (i < array.length) {
    a.push(array[i]+"!!!");
    i++;
  }
 return a;
}
//iLoveTheBeatles(9);
function iLoveTheBeatles(n) {
  var i = 0;
  var a = [];
  do {
   a.push("I love the Beatles!");
   i++;
  } while (i <= n  && n < 15);
  return a;
}
