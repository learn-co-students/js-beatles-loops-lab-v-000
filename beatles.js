'use strict';

function theBeatlesPlay(musicians, instruments) {
  var newArray = [];
  for (var i = 0; i < 4; i++) {
    newArray.push(musicians[i] + " plays " + instruments[i]);
  };
  return newArray;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", 
  "He was never a vegetarian", 
  "He was a choir boy and boy scout", 
  "He hated the sound of his own voice"];
  var newArray = [];
  var i = 0;
  while(i < facts.length) {
    newArray.push(facts[i] + '!!!');
    i++;
  }
  return newArray;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newArray;
}