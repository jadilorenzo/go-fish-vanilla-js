class Deck {
  constructor() {
    this.cards = []
    suits.forEach((suit) => {
      ranks.forEach((rank) => {
        this.cards.push(new Card(suit, rank))
      })
    })
    this.original = this.cards
  }

  get length() {
    return this.cards.length
  }

  shuffle() {
    this.cards = this.cards.sort(() => Math.random() - 0.5)
  }

  draw() {
    return this.cards.shift()
  }
}
