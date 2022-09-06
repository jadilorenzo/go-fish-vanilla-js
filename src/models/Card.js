const suits = ['A', 'H', 'S', 'C']
const ranks = ['A','K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2' ]

class Card {
    constructor(suit, rank) {
        if (suits.includes(suit) && ranks.includes(rank)) {
            this.suit = suit
            this.rank = rank
        }
    }

    equals(card) {
        return (this.suit === card.suit) && (this.rank === card.rank)
    }
}
