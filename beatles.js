function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push( `${musicians[i]} plays ${instruments[i]}` );
  }
  return array;
}

function johnLennonFacts(johnLennonFacts) {
  var array = [];
  let i = 0;

  while (i < johnLennonFacts.length) {
    array.push(`${johnLennonFacts[i]}!!!`)
    i++
  }
  return array;
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++
  } while (number < 15)
  return array;
}