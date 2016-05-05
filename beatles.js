'use strict';

function theBeatlesPlay(musician, instrument){
  var sentences = [];
  for (var i = 0; i < musician.length; i++){
    sentences.push(musician[i] + " plays " + instrument[i]);
  };
  return sentences;
};

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var sentences = [];
  for (var i = 0; i < facts.length; i++){
    sentences.push(facts[i] + "!!!");
  };
  return sentences;
};

function iLoveTheBeatles(num){
  var sentences = [];
  do {
    num++;
    sentences.push("I love the Beatles!");
  } while (num < 15);
  return sentences;
};
