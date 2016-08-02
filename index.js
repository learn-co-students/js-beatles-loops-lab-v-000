function theBeatlesPlay(musicians_array, instruments_array) {
  var a = [];
  for (let i = 0; i < musicians_array.length; i++){
    a.push(musicians_array[i] + " plays " + instruments_array[i]);
  }
  return a;
}

function johnLennonFacts(array) {
  var a = []
  for (let i = 0; i < array.length; i++){
    a.push(array[i] + "!!!");
  }
  return a;
}

function iLoveTheBeatles(number) {
  var a = []
  var b = ["I love the Beatles!"]

  do {
    a.push("I love the Beatles!");
  } while (a.length <= number)

  if (number > 15){
    return b;
  } else {

    return a;
  }
}
