class Card {
    constructor(suit, rank) {
        this.suit = suit
        this.rank = rank
    }

    equals(card) {
        return this.suit === card.suit && this.rank === card.rank
    }
}
