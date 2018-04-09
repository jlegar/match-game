var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var initArray = [1,2,3];
  var randomArray = [];

  for (var i=1; i<=8; i++) {
    initArray.push(i, i);
  }

  while (initArray.length > 0) {
    var j = Math.random(0, initArray.length);
    randomArray.push(initArray[j]);
    initArray.splice(j, 1);
  }

  return randomArray;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
