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

  findIndexesWithRank(rank) {
    const indexes = []
    this._hand.filter((c) => c.hasRank(rank)).forEach((c, index) => {
      indexes.push(index)
    })
    return indexes
  }

  take(card) {
    this._hand.push(card)
  }

  give(cardIndex) {
    const card = this._hand.splice(cardIndex, 1)[0]
  }
}
