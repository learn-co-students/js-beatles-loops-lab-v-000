function theBeatlesPlay(musicians, instruments) {
	var beatles_array = [];
	for (var i = 0; i < musicians.length; i++) {
		var plays = `${musicians[i]} plays ${instruments[i]}`;
		beatles_array.push(plays);
	}
	return beatles_array;
}

function johnLennonFacts(facts) {
	var facts_array = [];
	facts.forEach(function(fact, index){
		facts_array.push(fact + "!!!")
	});
	return facts_array;
}

function iLoveTheBeatles(number) {
	var love_array = [];
	var countdown = number;
	if (countdown < 15) {
		do {
		love_array.push("I love the Beatles!");
		countdown--;
		}
		while (countdown >= 0);	
	} else {
		love_array.push("I love the Beatles!");
	}
	
	return love_array;
}