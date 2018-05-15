// function theBeatlesPlay(musicians, instruments) {
// 	var ary = [];
// 	for (i = 0; i < musicians.length; i++) {
// 		ary.push(musicians[i] + " plays " + instruments[i]);
// 	}
// 	return ary;
// }

// function theBeatlesPlay(musicians, instruments) {
// 	return musicians.map((m, i) => {
// 		return m + ' plays ' + instruments[i]
// 	})
// }

function theBeatlesPlay(arraym, arrayi) {
	var arrays = []
	for (let i = 0; i < arraym.length; i++) {
		arrays.push(`${arraym[i]} plays ${arrayi[i]}`)
	}
	return arrays

}




// function johnLennonFacts(ary) {
// 	var l = ary.length;
// 	var i = 0;
// 	var newAry = [];
// 	while (i < ary.length) {
// 		newAry.push(ary[i] + "!!!");
// 		i++;
// 	}
// 	return newAry;
// }

function johnLennonFacts(arr) {
	var i = 0;
	while (i < arr.length) {
		arr[i] += "!!!";
		i++;
	}
	return arr;
}

function iLoveTheBeatles(num) {
	var ary = [];
	var item = "I love the Beatles!";
	do {
		ary.push(item);
		num++;
	} while (num < 15);
	return ary;
}
