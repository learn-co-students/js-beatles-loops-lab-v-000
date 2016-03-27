'use strict';

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians_array, instruments_array) {
  var join = [];

  for (var i = 0; i < musicians_array.length; i++) {
    var combination = musicians_array[i] + " plays " + instruments_array[i];
    join.push(combination);
  }
  return join;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", 
  "He was a choir boy and boy scout", "He hated the sound of his own voice"];

  var new_array = [];
  var i = 0;

  while (i < facts.length) {
    new_array.push(facts[i] + "!!!");
    i++;
  }
  return new_array;
}

function iLoveTheBeatles(number) {
  var empty_array = [];

  do {
    empty_array.push("I love the Beatles!");
    number +=1;
  } while (number < 15);
  return empty_array;
}

