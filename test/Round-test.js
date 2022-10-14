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
    console.log('test', turn1)
    turn2 = new Turn("function", card1)

    deck = new Deck([card1, card2, card3])

    round = new Round(deck)
  })
  it('should be an instance of round', function () {

    expect(round).to.be.an.instanceof(Round)
  })

  it('should have access to the deck', function() {

    expect(round.deck.cards).to.deep.equal([card1, card2, card3])
  })

  it('should return current card', function() {

    round.returnCurrentCard()
    expect(round.currentCard).to.deep.equal(card1)
  })

  it('should have default of 0 on turns property', function() {

    expect(round.turns).to.equal(0)
  })

  it('should keep a list of incorrectGuesses', function() {

    expect(round.incorrectGuesses).to.deep.equal([])
  })

  it('should keep track of turns', function() {

    round.takeTurn()
    expect(round.turns).to.equal(1)
  })

  it('should give feedback about guess', function() {

console.log('2', turn1)
    expect(round.takeTurn('object')).to.equal('correct!')
  })
  /*** need at least 10 tests
  input (argument)- guesses
    instructions say takes in guesses
    but, the example takes in the entire Deck
    sup wit dat?
  record each guess
    if correct, push guess into array of correct
      guesses
    incorrect, push into incorrect guess list
  currentCard should be first card in deck at start

  round.turns -property***  to hold numberof guesses, default 0
  round.incorrectGuesses
  ?round.correctGuesses
  round.calculatePercentCorrect
  ***/

})
