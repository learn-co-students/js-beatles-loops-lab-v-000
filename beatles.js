function theBeatlesPlay(mus, inst) {
	var arr = [];
	
	for (let i=0; i < mus.length; i++) {
		arr.push(`${mus[i]} plays ${inst[i]}`);
	}
	
	return arr;
}

function johnLennonFacts(facts) {
	var arr = [];
	var i = 0;
	while (i < facts.length) {
		arr.push(`${facts[i]}!!!`)
		i++
	}
	return arr;
}

function iLoveTheBeatles(n) {
	var arr = [];
	do {
		arr.push("I love the Beatles!")
		n++
	} while (n < 15)
	return arr;
}