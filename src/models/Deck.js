class Deck {
  constructor() {
    this._cards = []
    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        this._cards.push(new Card(suit, rank))
      })
    })
    this.original = this.cards
  }

  get length() {
    return this._cards.length
  }

  cards() {
    return this._cards
  }

  shuffle() {
    this.cards = this._cards.sort(() => Math.random() - 0.5)
  }

  draw() {
    return this._cards.shift()
  }
}
