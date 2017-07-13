function theBeatlesPlay(musicians, instruments){
	var array = [];
	for(let i = 0; i < musicians.length; i++){
		array.push(musicians[i] + " plays " + instruments[i]);
	}
	return array;
}

function johnLennonFacts(array){
	var number = array.length - 1;
	while (number >= 0){
		array[number] = array[number] + "!!!";
		number--;
	}
	return array;
}

function iLoveTheBeatles(number){
	var array = [];
	do {
		array.push("I love the Beatles!")
		number ++
	} while (number < 15);
	return array;
}