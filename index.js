function theBeatlesPlay(musicians,instruments ) {
  var array = [];
  for (var i = 0; i < musicians.length; i++) {
    array.push( musicians[i] + " plays " + instruments[i] );
  }
  return array;
}


function johnLennonFacts(facts) {
  var array = [];
  var count = 0
  while (count < facts.length ) {
    array.push(facts + "!!!");
    count++
  }
  return array;
}


    function iLoveTheBeatles(num){
          var array = [];
        do {
          array.push("I love the Beatles!");
          num = num + 1;
        } while (num < 15);
        return array;
    }


      // describe('iLoveTheBeatles', function() {
      //   it("returns an array of 'I love the Beatles!' 8 times when passed the parameter 7 ", function() {
      //     expect(iLoveTheBeatles(7)).toEqual(["I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!", "I love the Beatles!"]);
      //   });
      //
      //   it("returns an array of 'I love the Beatles!' once when passed the parameter 17", function() {
      //     expect(iLoveTheBeatles(17)).toEqual(["I love the Beatles!"]);
      //   });
      // });
