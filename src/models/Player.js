const random = (max, min) => Math.floor(Math.random() * (max - min) + min)

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

  take({ cards }) {
    if (cards.length !== 0) {
      this._hand = this._hand.concat(cards)
    }
    this.reviewForBooks()
  }

  give({ rank }) {
    const cards = this._hand.filter((card) => card.rank() === rank)
    this._hand = this._hand.filter((card) => card.rank() !== rank)
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
        this._books.push(this._hand.filter((card) => card.rank() === key))
        this._hand = this._hand.filter((card) => card.rank() !== key)
      }
    })
  }

  generateOtherPlayerIndex({ index, range }) {
    let number = random(0, range - 1)
    if (number === index) {
      number = this.generateOtherPlayerIndex({ index, range })
    }
    return number
  }

  generateRandomRankFromHand({ hand }) {
    if (hand?.length > 0) {
      return hand[random(0, hand.length - 1)].rank()
    }
    return undefined
  }
}
