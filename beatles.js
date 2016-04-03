'use strict';

function theBeatlesPlay(musicians, instruments) {
  var i,
      j = 0;
  for (i = 0; i < musicians.length; i++) {
    musicians[i] += " plays " + instruments[j];
    j++;
  }
  return musicians;
}

function johnLennonFacts() {
  var i,
      facts = ["He was the last Beatle to learn to drive",
               "He was never a vegetarian",
               "He was a choir boy and boy scout",
               "He hated the sound of his own voice"];
  for (i = 0; i < facts.length; i++) {
    facts[i] += "!!!";
  }
  return facts;
}

function iLoveTheBeatles(i) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    i++;
  } while (i < 15);
  return arr;
}
