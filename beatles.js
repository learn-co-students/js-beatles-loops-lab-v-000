'use strict';

function theBeatlesPlay(musicians, instruments) {
  var memo = [];
  var index = 0;

  for (var musician of musicians) {
    memo.push(musician + ' plays ' + instruments[index]);
    index++;
  }

  return memo;

}

function johnLennonFacts() {
  var note = [];
  var index = 0;

  for (var fact of facts()) {
    note.push(fact + '!!!');
    index++;
  }

  return note;

}

function facts() {
  return [
            "He was the last Beatle to learn to drive",
            "He was never a vegetarian",
            "He was a choir boy and boy scout",
            "He hated the sound of his own voice"
          ];
}

function iLoveTheBeatles(number) {
  var message = [];

  do {
    message.push(loveNote());
    number++;
  } while (number < 15);

  return message;
}

function loveNote() {
  return 'I love the Beatles!';
}
