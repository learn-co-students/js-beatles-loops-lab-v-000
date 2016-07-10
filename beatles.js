function theBeatlesPlay(musicians, instruments) {
  var combined = new Array();
  for(var i = 0; i < (musicians.length); i++) {
    var string = (musicians[i] + " plays " + instruments[i]);
    combined.push(string);
  }
  return combined;
}

function johnLennonFacts(facts) {
  var count = 0;
  var factExclaim = new Array();
  while (facts.length != count ) {
    factExclaim.push(facts[count] + "!!!");
    console.log(count++);
  }
  return factExclaim;
}

function iLoveTheBeatles(number) {
  var loveArray = new Array();
  do {
    loveArray.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return loveArray;
}
