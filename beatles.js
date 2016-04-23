'use strict';

function theBeatlesPlay (musicians, instruments) {
  var musicianInstruments = [];

  musicians.forEach(function (musician, index) {
    if (instruments[index] === undefined) {
      musicianInstruments.push( musician + " plays Tuba");
    } else {
      musicianInstruments.push(musician + " plays " + instruments[index]);
    }
  });

  return musicianInstruments;
}

function johnLennonFacts () {
  var facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian", 
  "He was a choir boy and boy scout", 
  "He hated the sound of his own voice"
  ];

  facts.forEach(function (fact, index){
    facts[index] += "!!!";
  });

  return facts;
}

function iLoveTheBeatles (number) {
  var beatlesLove = [];
  var i = 0;

  do {
    beatlesLove.push("I love the Beatles!");

    i++;
  } while (i <= number && number < 15);

  return beatlesLove;
}