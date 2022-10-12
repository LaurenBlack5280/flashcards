class Turn {
  constructor(guess, currentCard) {
    this.guess = guess
    this.currentCard = currentCard
  }

  returnGuess() {
    return this.guess
  }

  returnCard() {
    return this.currentCard
  }

  evaluateGuess() {
    if(this.guess === this.currentCard.correctAnswer) {
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
