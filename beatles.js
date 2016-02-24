'use strict';

function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    var play = musicians[i] + " plays " + instruments[i];
    array.push(play);
  }
  return array;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var array = [];
  while(array.length < facts.length) {
    array.push(facts[array.length] + "!!!");
  }
  return array;
}

function iLoveTheBeatles(number){
  var array = [];
  do {
    number += 1;
    array.push("I love the Beatles!")
  } while (number < 15);
  return array;
}