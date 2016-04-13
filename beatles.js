'use strict';

function theBeatlesPlay(musicians, instruments) {
  var band = [];
  for (var x=0; x < musicians.length; x++) {
    band.push(musicians[x] + " plays " + instruments[x]);
  };
  return band;
};

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", 
               "He was never a vegetarian", 
               "He was a choir boy and boy scout", 
               "He hated the sound of his own voice"];
  var arr = [];
  var x = 0;
  while (x < facts.length) {
    arr.push(facts[x] + "!!!");
    x++;
  }
  return arr;
};

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num ++;
  } while(num < 15);
  return arr;
};