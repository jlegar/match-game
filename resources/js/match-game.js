var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

$(document).ready(function(){
  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
});

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
  var initArray = [];
  var randomArray = [];

  for (var i=1; i<=8; i++) {
    initArray.push(i, i);
  }

  while (initArray.length > 0) {
    var j = Math.floor(Math.random()*initArray.length);
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
  var cardColors = ['hsl(25, 85%, 65%)',
                    'hsl(55, 85%, 65%)',
                    'hsl(90, 85%, 65%)',
                    'hsl(160, 85%, 65%)',
                    'hsl(220, 85%, 65%)',
                    'hsl(265, 85%, 65%)',
                    'hsl(310, 85%, 65%)',
                    'hsl(360, 85%, 65%)'];
  $game.empty();
  $game.data('flippedCards', []);

  cardValues.forEach(function(cardNumber){
    var $card = $('<div class="card col-xs-3"></div>');
    $card.data('value', cardNumber);
    $card.data('flipped', false);
    $card.data('color', cardColors[cardNumber-1]);
    $game.append($card);
  });

  $('.card').click(function(){
    window.setTimeout(MatchGame.flipCard($(this), $game), 2000);
  });
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  /*debugger;*/
  if (!$card.data('flipped')) {
    $card.data('flipped', true);
    $card.css('background-color', $card.data('color'));
    $card.html($card.data('value'));
    $game.data('flippedCards').push($card);
  };

  if ($game.data('flippedCards').length === 2) {
    if ($game.data('flippedCards')[0].data('value') === $game.data('flippedCards')[1].data('value')) {
      $game.data('flippedCards')[0].css({'color': 'rgb(204, 204, 204)', 'background-color': 'rgb(153, 153, 153)'});
      $game.data('flippedCards')[1].css({'color': 'rgb(204, 204, 204)', 'background-color': 'rgb(153, 153, 153)'});
    } else {
      $game.data('flippedCards')[0].data('flipped', false);
      $game.data('flippedCards')[0].css('background-color', 'rgb(32, 64, 86)');
      $game.data('flippedCards')[0].empty();
      $game.data('flippedCards')[1].data('flipped', false);
      $game.data('flippedCards')[1].css('background-color', 'rgb(32, 64, 86)');
      $game.data('flippedCards')[1].empty();
    }
    $game.data('flippedCards', []);
  };
};
