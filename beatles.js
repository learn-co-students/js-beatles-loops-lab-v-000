'use strict';

function theBeatlesPlay(musiciansArr, instrumentsArr){
  var sentences = [];
  for(var i = 0; i < musiciansArr.length; i++){
    sentences.push(musiciansArr[i] + " plays " + instrumentsArr[i]);
  }
  return sentences;
}

function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var exclamations = [];
  var i = 0;
  while (i < facts.length){
    exclamations.push(facts[i] + "!!!");
    i++;
  }
  return exclamations;
}

function iLoveTheBeatles(num){
  var love = [];
  do {
    love.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return love;
}