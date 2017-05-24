function theBeatlesPlay(musicians, instruments) {
  var array = new Array();

  for (var i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  };

  return array;
};

function johnLennonFacts(array) {
  const shout = new Array();

  let i = 0;
  while (i < array.length) {
    shout.push(`${array[i]}!!!`);

    i++
  };
  return shout;
};

function iLoveTheBeatles(n) {
  var array = new Array();
  do {
    array.push("I love the Beatles!");

    ++n
  } while (n < 15);

  return array
}
