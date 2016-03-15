'use strict';

function theBeatlesPlay(musicians, instruments) {
  var my_array = [];
  for (var i = 0; i < musicians.length; i++) {
   my_array.push(musicians[i] + " plays " + instruments[i]);
  }
  return my_array;
}

function johnLennonFacts(){
  var john_array = [];
  john_array.push("He was the last Beatle to learn to drive!!!");
  john_array.push("He was never a vegetarian!!!");
  john_array.push("He was a choir boy and boy scout!!!");
  john_array.push("He hated the sound of his own voice!!!");
  return john_array;
}

function iLoveTheBeatles(num){
  var beatle_array = [];
  var i = 0;

  while (i <= num) {
    beatle_array.push("I love the Beatles!");
    i++;
    if (num  > 10){
      return beatle_array;
    }
  }
  return beatle_array;
}

