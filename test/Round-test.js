const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  let card1
  let card2
  let card3
  let turn1
  let turn2
  let deck
  let round
  //let round2
  beforeEach(function() {
    card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"], "object")
    card2 = new Card (2, "What is a comma-separated list of related values?",
      ["array", "object", "function"], "array")
    card3 = new Card (3, "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"], "mutator method")

    turn1 = new Turn("object", card1)
    turn2 = new Turn("function", card1)

    deck = new Deck([card1, card2, card3])

    round = new Round(deck)
  })
  it('should be an instance of deck', function () {

    expect(round).to.be.an.instanceof(Round)
  })
  /*** need at least 10 tests

  input (argument)- guesses
  record each guess
    if correct, push guess into array of correct
      guesses
    incorrect, push into incorrect guess list
  currentCard should be first card in deck at start


  round.deck - property => [card1, card2, card3];
  round.currentCard *** add property that keeps
    track of the current card, default first
    card in deck --> card at index 0 of deck
  round.returnCurrentCard() -method =>
  round.turns -property
  round.incorrectGuesses
  round.correctGuesses
  round.numGuesses *** add property to hold number
    of guesses, default 0
  round.getNumGuesses()*** add method that increments
    by 1 on each guess.
    round.calculatePercentCorrect
  ***/

})
