'use strict';

function theBeatlesPlay(musicians, instruments) {
  var arr = []
  for (var i = 0; i < musicians.length; i++) {
    arr.push(musicians[i] + " plays " + instruments[i]);
  }
  return arr
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", 
  "He was never a vegetarian", 
  "He was a choir boy and boy scout", 
  "He hated the sound of his own voice"];
  var arr = [];
  var i = 0
  while (i < facts.length) {
    arr.push(facts[i] + "!!!");
    i++
  }
  return arr
}

function iLoveTheBeatles(number) {
  var arr = []
  do {
    arr.push("I love the Beatles!");
    number++
  } while (number < 15);
  return arr;
}

// for (var i = 1; i < 100; i++) {
//   console.log( "Hello World the " + i + " time" );
// }


// while (age < 16 ) {
//   console.log("You can't have my car keys - you're too young!");
//   age++;
// }

// do {
//    i += 1;
//    console.log(i);
// } while (i < 5);