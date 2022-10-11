class Card {
  constructor(id, question, answerList, correctAnswer) {
    this.id = id
    this.question = question
    this.answers = answerList
    this.correctAnswer = correctAnswer
  }

}

module.exports = Card;
