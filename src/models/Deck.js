const suits = ['A', 'H', 'S', 'C']
const ranks = ['A','K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2' ]

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
}
