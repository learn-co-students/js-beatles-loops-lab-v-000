'use strict';
function theBeatlesPlay(musiciansArray, instrumentsArray){
  var stringArray = [];
  for(var i=0; i< musiciansArray.length; i++){
    stringArray.push(musiciansArray[i]+" plays "+ instrumentsArray[i]);
  }
  return stringArray;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var i=0;
  var factsArray=[];
  while (i<facts.length){
    factsArray.push(facts[i]+"!!!");
    i++;
  }
  return factsArray;
}

function iLoveTheBeatles(number){
  var newArray=[];
  do{
    newArray.push("I love the Beatles!");
    number++;
  } while(number < 15);
  return newArray;
}
