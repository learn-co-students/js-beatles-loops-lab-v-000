function theBeatlesPlay(musicians, instruments) {
  var beatlesPlay = [];
  for(let i = 0, l = musicians.length; i < l; i++) {
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return beatlesPlay;
}

function johnLennonFacts(array) {
  let i = 0;
  while(i < array.length) {
    array[i] += "!!!";
    i++;
  };
  return array;
}

function iLoveTheBeatles(n) {
  var array  = [];
  do {
    array.push("I love the Beatles!");
    n += 1;
  } while(n < 15);
  return array;
}