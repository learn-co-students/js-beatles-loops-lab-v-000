function theBeatlesPlay(arrM, arrI) {
  var musc = [];
  for (var i = 0; i < arrM.length; i ++) {
    var str = arrM[i] + " plays " + arrI[i];
    musc.push(str);
  }
  return musc;

}

function johnLennonFacts(arr) {
  var facts = [];
  var i = 0;
  while (i < arr.length) {
    let str = arr[i] + "!!!";
    facts.push(str);
    i ++;
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var arr = [];
  var i = num
  do {arr.push("I love the Beatles!");
  i ++
}
  while (i < 15)
  return arr
}
