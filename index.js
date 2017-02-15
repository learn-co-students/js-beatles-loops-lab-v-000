function theBeatlesPlay(musicians, instruments) {
  var storage = [];
  for (let i = 0; i < musicians.length; i++) {
    storage.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return storage;
}

function johnLennonFacts(array) {
  let n = array.length;
  while (n>0) {
    array[n-1] = array[n-1] + "!!!";
    console.log(--n);
  }
  return array;
}

function iLoveTheBeatles(number) {
  var beatles = [];
  do {
    beatles.push("I love the Beatles!");
    console.log(++number);
  } while (number<15);
  return beatles;
}
