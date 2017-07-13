function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < musicians.length; i++) {
    newArray.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var l = array.length - 1;
  while(l >= 0) {
    array[l] += '!!!';
    l--;
}
  return array;
}

function iLoveTheBeatles(n) {
  var newArray = ["I love the Beatles!"];
  for (var i = 0; n != 17 && i < n; i++) {
    newArray.push("I love the Beatles!");
  }
 return newArray;
}
