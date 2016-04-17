'use strict';

function theBeatlesPlay(artists, instruments) {
  var array = [];
  for(var i = 0; i < artists.length; i++) {
    var str = artists[i] + " plays " + instruments[i];
    array.push(str);
  }
  return array;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var arr = [];
  var counter = 0
  while (counter < facts.length) {
    facts[counter] = facts[counter] + "!!!";
    counter++
  }
  return facts;
}

function iLoveTheBeatles(num) {
  var newarr = [];
  do {
    newarr.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newarr;
}