class Player {
  constructor(name) {
    this.name = name
    this._hand = [] // array of cards
    this._books = [] // array of array of cards
  }

  hand() {
    return this._hand
  }

  books() {
    return this._books
  }

  take(card) {
    this._hand.push(card)
  }

  give() {
    return this._hand.pop()
  }
}
