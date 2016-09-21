function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < 4; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  };
  return array;
};

function johnLennonFacts(array) {
  let i = 0
  let newArray = []
  while (i < array.length) {
    newArray.push(array[i] + "!!!");
    i++;
  };
  return newArray;
};

function iLoveTheBeatles(number) {
  let array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array;
}
