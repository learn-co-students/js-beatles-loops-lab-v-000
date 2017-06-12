
function theBeatlesPlay(musicians, instruments) {
 var arr = []
 for (var i = 0; i < 4; i++) {
  arr.push(`${musicians[i]} plays ${instruments[i]}`);
 }
 return arr
}

function johnLennonFacts(arr) {
 var newArr = []
 var i = 0;
 while (arr[i]) {
  newArr.push(arr[i] + "!!!");
  i++;
 }
 return newArr
}

function iLoveTheBeatles(x) {
 var newArr = []
 do {
  newArr.push("I love the Beatles!");
  x++
 } while (x < 15);
 return newArr
}
