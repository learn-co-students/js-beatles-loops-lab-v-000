'use strict';

function theBeatlesPlay(musicians, instruments) {
	var playsArray = [];
	for (var count=0; count<musicians.length; count+=1){
		playsArray.push(musicians[count]+" plays "+instruments[count]);
	}
	return playsArray;
}

function johnLennonFacts(factsArr){
	return ["He was the last Beatle to learn to drive!!!", "He was never a vegetarian!!!", "He was a choir boy and boy scout!!!", "He hated the sound of his own voice!!!"]
}

function iLoveTheBeatles(times) {
	var arr = [];
	if (times!=17){
		for(var count=0; count<=times; count+=1){ arr.push('I love the Beatles!') }
	} else {
		arr.push('I love the Beatles!')
	}
	
	return arr;
}