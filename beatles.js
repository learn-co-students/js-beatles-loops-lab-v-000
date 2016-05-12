'use strict';

function theBeatlesPlay(musicians, instruments) {
  let memo = [];
  let index = 0;

  for (let musician of musicians) {
    memo.push(musician + ' plays ' + instruments[index]);
    index++;
  }

  return memo;

}

function johnLennonFacts() {
  let note = [];
  let index = 0;

  for (let fact of facts()) {
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
  let message = [];

  do {
    message.push(loveNote());
    number++;
  } while (number < 15);

  return message;
}

function loveNote() {
  return 'I love the Beatles!';
}
