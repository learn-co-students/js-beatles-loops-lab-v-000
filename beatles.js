'use strict';

function theBeatlesPlay(musicians, instruments) {
  var results =[]
  for ( var i= 0; i <= musicians.length -1; i++) {
    results[i] = musicians[i] + " plays " + instruments[i];
  }
  return results;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  for (var i =0; i <= facts.length-1; i++) {
    facts[i] +=  "!!!";
  }
  return facts;
}

function iLoveTheBeatles(num) {
  if (num <15) {
    var i =0;
    var results =[];
    do {
      i++;
      results.push("I love the Beatles!");
    } while (i <=num)
    return results;
  } else {
    return ["I love the Beatles!"];
  }
}
