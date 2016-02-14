'use strict';

function theBeatlesPlay(musician, instrument){
  var arr = [];
  for (var i = 0; i < musician.length; i++){
    arr.push(musician[i] + ' plays ' + instrument[i]);
  }
  return arr;
}

function johnLennonFacts(){
  var facts = ['He was the last Beatle to learn to drive', 'He was never a vegetarian', 'He was a choir boy and boy scout', 'He hated the sound of his own voice'];
  var arr = [];
  while(arr.length < facts.length){
    arr.push(facts[arr.length] + '!!!');
  }
  return arr;
}

function iLoveTheBeatles(num){
  var arr = [];
  do {
    arr.push('I love the Beatles!');
    num++;
  } while(num < 15);
  return arr;
}