const Turn = require('../src/Turn');


class Round {
  constructor(deck) {
    this.deck = deck
    this.currentCard = deck.cards[0]
    this.turns = 0
    this.incorrectGuesses = []
  }
// push incorrect guess into incorrectGuesses
  returnCurrentCard() {
    return this.currentCard
  }

  takeTurn(guess) {
    this.turns ++
  //turn = new Turn(guess, )
    console.log('round', Turn);
    turn.giveFeedback()
      //console.log(guess)
      //console.log(turn1)//--undefined;
      //console.log(turn2)

  }
}

module.exports= Round;
