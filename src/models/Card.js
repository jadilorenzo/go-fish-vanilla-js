const suits = ['D', 'H', 'S', 'C']
const ranks = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2']

class Card {
  constructor(suit, rank) {
    if (suits.includes(suit) && ranks.includes(rank)) {
      this._suit = suit
      this._rank = rank
    }
  }

  suit() {
    return this._suit
  }

  rank() {
    return this._rank
  }

  equals(card) {
    return (this._suit === card._suit) && (this._rank === card._rank)
  }
}
