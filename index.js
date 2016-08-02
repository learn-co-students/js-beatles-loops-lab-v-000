function theBeatlesPlay(musicians, instruments){
	var theBeatles = [];
	for(var i=0; i<musicians.length; i++){
		theBeatles[i] = musicians[i]+" plays "+instruments[i];
	}
	return theBeatles;
}

function johnLennonFacts(facts){
	var i = 0;
	while(i < facts.length){
		facts[i]=facts[i]+"!!!";
		i++;
	}
	return facts;
}

function iLoveTheBeatles(number){
	var newArray = new Array();
	do {
		newArray.push("I love the Beatles!");
		number++;
	} while (number < 15);
	return newArray;
}