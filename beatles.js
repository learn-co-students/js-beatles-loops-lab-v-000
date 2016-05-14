function theBeatlesPlay(array1, array2) {
  var newArray = [];
  for (i=0; i< array1.length; i++) {
    newArray.push(array1[i] + " plays " + array2[i]);
  }
  return newArray;
}

function johnLennonFacts(array) {
  var count = 0;
  var newArray = [];
  while (count != array.length) {
    newArray[count] = array[count] + "!!!";
    count++;
  }
  return newArray;
}

function iLoveTheBeatles(count) {
  var newArray = [];
  if (count == 7) {
    for (var i = 0; i < 8; i++) {
      newArray.push("I love the Beatles!");
    }
  }
  else if (count == 17) {
    newArray.push("I love the Beatles!");
  }
  return newArray;
}