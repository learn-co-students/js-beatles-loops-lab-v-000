function theBeatlesPlay(musicians, instruments) {
  var playarr = [];
  for (let i = 0; i < musicians.length; i++) {
    playarr.push(musicians[i] + " plays " + instruments[i]);
  }
  return playarr
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
