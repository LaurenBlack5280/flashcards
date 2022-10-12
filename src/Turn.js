class Turn {
  constructor(guess, card) {
    this.guess = guess
    this.card = card
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.card
  }

  evaluateGuess() {
    if(this.guess === this.card.correctAnswer) {
      this.guess = true
    } else {
      this.guess = false
    }
    return //this.guess
  }

  giveFeedback() {
    this.evaluateGuess()
    if(this.guess) {
      return 'correct!'
    } else {
      return 'incorrect!'
    }
  }

}



module.exports = Turn;
