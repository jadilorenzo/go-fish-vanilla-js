class Player {
  constructor(name) {
    this.name = name
    this._hand = [] // array of cards
    this._books = [] // array of array of cards
  }

  books() {
    return this._books
  }

  hand() {
    return this._hand
  }

  take(cards) {
    if (cards.length !== 0) {
      this._hand = this._hand.concat(cards)
    }
  }

  give(rank) {
    const cards = this._hand.filter((card) => card.hasRank(rank))
    this._hand = this._hand.filter((card) => !card.hasRank(rank))
    return cards
  }
}
