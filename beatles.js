'use strict';

function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return arr;
}

function johnLennonFacts(arr) {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var arr = [];

  for (var i = 0; i < facts.length; i++) {
    arr.push(facts[i] + "!!!");
  }
  return arr;
}

function iLoveTheBeatles(num) {
  var arr = [];
  do {
    arr.push("I love the Beatles!");
    num++
  } while (num < 15)
  return arr;
}
