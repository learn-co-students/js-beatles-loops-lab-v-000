function theBeatlesPlay(musicians, instruments) {
  var final = [];
  for (var i = 0; i <= musicians.length - 1; i++) {
    final.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return final;
}

function johnLennonFacts(array) {
  var new_array = [];
  var i = 0
  while (i < array.length) {
    new_array.push(array[i] + "!!!");
    i += 1;
  }
  return new_array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push('I love the Beatles!');
    number += 1;
  } while (number < 15);
  return array;
}
