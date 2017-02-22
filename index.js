function theBeatlesPlay(musicians, instruments) {
  var ary = []; 
  var i = 0;
  for (i = 0; i < musicians.length; i++) {
    ary.push(musicians[i] + " plays " + instruments[i]);
    }
    return ary;
  }

function johnLennonFacts(ary) {
  var l = ary.length;
  var i = 0;
  var newAry = [];
  while (i < ary.length) {
    newAry.push(ary[i] + "!!!");
    i++;
  }
  return newAry;
}

function iLoveTheBeatles(num) {
  var ary = [];
  var i = 0;
  var item = "I love the Beatles!";
  do {
    ary.push(item);
    num++;
   } while (num < 15);
return ary;  
}
