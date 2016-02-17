'use strict';

function theBeatlesPlay(musician_array, instrument_array) {
  var array = [];

  for (var i = 0; i < musician_array.length; i++) {
    array.push(musician_array[i] + " plays " + instrument_array[i]);
  }
  
  return array;
}

function johnLennonFacts() {
  var acts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var array = [];

  for (var i = 0; i < acts.length; i++) {
    acts[i] += "!!!";
  }

  return acts;
}

function iLoveTheBeatles(num) {
  var array = [];

  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);

  return array;
}