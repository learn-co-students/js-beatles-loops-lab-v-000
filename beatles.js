'use strict';
var musiciansArray = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instrumentsArray = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


// for loop
function theBeatlesPlay(musiciansArray, instrumentsArray){
  var stringList = [];
  for (var i = 0; i < musiciansArray.length; i++) {
    var sentence = musiciansArray[i] + " plays " + instrumentsArray[i];
    stringList.push(sentence);
  }
  return stringList;
}

// while loop
function johnLennonFacts(){
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var stringList = [];
  var i = 0;
  while (i < facts.length){
    var sentence = facts[i] + "!!!";
    stringList.push(sentence);
    i++;
  }
  return stringList;
}

// do while loop
function iLoveTheBeatles(number){
  var stringList = [];
  do {
    stringList.push("I love the Beatles!");
    number++;
  }
  while (number < 15);
  return stringList;
}