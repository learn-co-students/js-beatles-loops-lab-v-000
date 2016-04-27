'use strict';
function theBeatlesPlay(musicians, instruments) {
    var answer = [];
    for (var i = 0 ; i < musicians.length ; i++) {
        answer.push(musicians[i] + " plays " + instruments[i]);
    }
    return answer;
}

function johnLennonFacts() {
    var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
    var output = [];
    while (output.length < facts.length) {
        output.push(facts[output.length] + "!!!");
    }
    return output;
}

function iLoveTheBeatles(number) {
    var output = [];
    do {
        output.push("I love the Beatles!");
        number ++;
    } while (number < 15);
    return output;
}
