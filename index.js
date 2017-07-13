function theBeatlesPlay(musicians, instruments){
  var emptyArr = [];
  for(var i = 0; i < musicians.length; i++){
    var string = musicians[i] + " plays " + instruments[i];
    emptyArr.push(string)
  }
  return emptyArr
}

function johnLennonFacts(facts){
  var arr = [];
  var num = 0
  while (num < facts.length) {
    arr.push(facts[num] + "!!!");
    num++
  }
  return arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num ++
  } while (num < 15);
  return arr

}
