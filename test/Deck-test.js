const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');

describe('Deck', function() {
  let card1
  let card2
  let card3
  let deck

  beforeEach(function () {

    card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"], "object")

    card2 = new Card (2, "What is a comma-separated list of related values?",
      ["array", "object", "function"], "array")

    card3 = new Card (3, "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"], "mutator method")

      deck = new Deck([card1, card2, card3])

  })

    it('should be an instance of deck', function() {

      expect(deck).to.be.an.instanceof(Deck)
    })

    it('should know how many cards are in a deck', function() {


      expect(deck.countCards()).to.equal(deck.cards.length)
    })

})
