
function theBeatlesPlay(musicians, instruments){
  var x = [];
  for (var i = 0; i < musicians.length; i++) {
    var string = musicians[i] + " plays " + instruments[i];
    x.push(string)
  }
  return x;
}

function johnLennonFacts(facts){
  var i = 0
  var str = []
  while (i < facts.length) {
    str.push(facts[i] + "!!!")
    i++
  }
  return str;
}

function iLoveTheBeatles(number){
  var a = []
  do {
    a.push("I love the Beatles!");
    number ++;
  } while (number < 15);
  return a;
}
