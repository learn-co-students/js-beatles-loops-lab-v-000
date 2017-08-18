function theBeatlesPlay(musicians, instruments) {
  var playArray = [];
    for (let i = 0; i < musicians.length; i++) {
      playArray.push(musicians[i] + " plays " + instruments[i]);
    }
    return playArray;
}

function johnLennonFacts(factsArray) {
  var indexNums = factsArray.length - 1;
  while (indexNums >= 0) {
    factsArray[indexNums] = factsArray[indexNums] + "!!!"
    indexNums--;
  }
  return factsArray;
}

function iLoveTheBeatles(num) {
  var myArr = [];
  do {
    myArr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return myArr;
}
