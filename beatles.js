'use strict';

function theBeatlesPlay(musicians, instruments){
  var array = [];
  musicians.forEach(function(musician, index) {
    var string = musician + " plays " + instruments[index];
    array.push(string);
  })
  return array
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var array = [];
  for (var i = 0; i < facts.length; i++){
    array.push(facts[i] + "!!!");
  }
  return array;
}

function iLoveTheBeatles(num){
  var array = [];
  do {
    array.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return array;
}