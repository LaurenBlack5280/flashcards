const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Turn = require('../src/Turn');

describe('Turn', function() {
  let card1
  let turn1
  //let turn2
  beforeEach(function () {
    // card1 = new Card ({
    //   "id": 1,
    //   "question": "What allows you to define a set of related information using key-value pairs?",
    //   "answers": ["object", "array", "function"],
    //   "correctAnswer": "object"
    // })
    /*
    {
      "id": 2,
      "question": "What is a comma-separated list of related values?",
      "answers": ["array", "object", "function"],
      "correctAnswer": "array"
    }
    */
    card1 = new Card (1, "What allows you to define a set of related information using key-value pairs?",
    ["object", "array", "function"], "object")

    turn1 = new Turn("object", card1)
    turn2 = new Turn("function", card1)
    })

  it('should be an instance of Turn', function() {
    expect(turn1).to.be.an.instanceof(Turn)
    expect(turn2).to.be.an.instanceof(Turn)
  })

  it('should return the guess of the user', function() {

    turn1.returnGuess()
    turn2.returnGuess()

    expect(turn1.guess).to.equal('object')
    expect(turn2.guess).to.equal('function')
  })

  it('should return the current card', function() {
    turn1.returnCard()
    turn2.returnCard()

    expect(turn1.currentCard).to.deep.equal({ "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"})
    expect(turn2.currentCard).to.deep.equal({ "id": 1,
      "question": "What allows you to define a set of related information using key-value pairs?",
      "answers": ["object", "array", "function"],
      "correctAnswer": "object"})
  })

  it('should evaluate the guess of the user', function() {
    turn1.evaluateGuess()
    turn2.evaluateGuess()

    expect(turn1.guess).to.equal(true)
    expect(turn2.guess).to.equal(false)
  })

  it('should give the user feedback', function() {
    // turn1.giveFeedback()
    // turn2.giveFeedback()

    expect(turn1.giveFeedback()).to.equal('correct!')
    expect(turn2.giveFeedback()).to.equal('incorrect!')
  })

})
