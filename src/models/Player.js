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
    this.reviewForBooks()
  }

  give(rank) {
    const cards = this._hand.filter((card) => card.hasRank(rank))
    this._hand = this._hand.filter((card) => !card.hasRank(rank))
    return cards
  }

  countsOfCards() {
    const counts = {}
    this._hand.forEach((card) => {
      if (!counts[card.rank()]) {
        counts[card.rank()] = 1
      } else {
        counts[card.rank()]++
      }
    })
    return counts
  }

  reviewForBooks() {
    const counts = this.countsOfCards()
    Object.keys(counts).forEach((key) => {
      if (counts[key] === 4) {
        this._books.push(this._hand.filter((card) => card.hasRank(key)))
        this._hand = this._hand.filter((card) => !card.hasRank(key))
      }
    })
  }
}
