class Player {
  constructor(name) {
    this.name = name
    this.hand = [] // array of cards
    this.books = [] // array of array of cards
  }

  take(card) {
    this.hand.push(card)
  }

  give() {
    return this.hand.pop()
  }
}
