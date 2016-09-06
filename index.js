function theBeatlesPlay(musicians, instruments) {
  var newArray = [];

  for (let i = 0, l = musicians.length; i < l;i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  }

  return newArray;
}

function johnLennonFacts(array) {
  var counter = 0;

  while (counter < array.length) {
    array[counter] = array[counter] + "!!!";
    counter++;
  }

  return array;
}

function iLoveTheBeatles(number) {
  var newArray = [];
  var counter = 0;

  do {
    newArray.push("I love the Beatles!");
    counter++;
  } while (counter <= number && number < 15)

  return newArray;
}
