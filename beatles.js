function theBeatlesPlay(musicians, instruments) {
   var empty = [];
   for (var i = 0; i < musicians.length; i ++) {
      empty.push(musicians[i] + " plays " + instruments[i]);

   }
   return empty;
}


function johnLennonFacts(facts) {
  var empty = [];
  var count = 0;
   while (count < facts.length) {
     empty.push(facts[count] + "!!!");

     count++;
   }
    return empty;
}


function iLoveTheBeatles(number) {
   var empty = [];

   do {
        empty.push("I love the Beatles!");
        number++;
   } while (number < 15);

   return empty;
}
