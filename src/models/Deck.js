const cardValues = [
  { suit: 'H', rank: 'A' },
  { suit: 'H', rank: 'K' },
  { suit: 'H', rank: 'Q' },
  { suit: 'H', rank: 'J' },
  { suit: 'H', rank: '10' },
  { suit: 'H', rank: '9' },
  { suit: 'H', rank: '8' },
  { suit: 'H', rank: '7' },
  { suit: 'H', rank: '6' },
  { suit: 'H', rank: '5' },
  { suit: 'H', rank: '4' },
  { suit: 'H', rank: '3' },
  { suit: 'H', rank: '2' },
  { suit: 'D', rank: 'A' },
  { suit: 'D', rank: 'K' },
  { suit: 'D', rank: 'Q' },
  { suit: 'D', rank: 'J' },
  { suit: 'D', rank: '10' },
  { suit: 'D', rank: '9' },
  { suit: 'D', rank: '8' },
  { suit: 'D', rank: '7' },
  { suit: 'D', rank: '6' },
  { suit: 'D', rank: '5' },
  { suit: 'D', rank: '4' },
  { suit: 'D', rank: '3' },
  { suit: 'D', rank: '2' },
  { suit: 'S', rank: 'A' },
  { suit: 'S', rank: 'K' },
  { suit: 'S', rank: 'Q' },
  { suit: 'S', rank: 'J' },
  { suit: 'S', rank: '10' },
  { suit: 'S', rank: '9' },
  { suit: 'S', rank: '8' },
  { suit: 'S', rank: '7' },
  { suit: 'S', rank: '6' },
  { suit: 'S', rank: '5' },
  { suit: 'S', rank: '4' },
  { suit: 'S', rank: '3' },
  { suit: 'S', rank: '2' },
  { suit: 'C', rank: 'A' },
  { suit: 'C', rank: 'K' },
  { suit: 'C', rank: 'Q' },
  { suit: 'C', rank: 'J' },
  { suit: 'C', rank: '10' },
  { suit: 'C', rank: '9' },
  { suit: 'C', rank: '8' },
  { suit: 'C', rank: '7' },
  { suit: 'C', rank: '6' },
  { suit: 'C', rank: '5' },
  { suit: 'C', rank: '4' },
  { suit: 'C', rank: '3' },
  { suit: 'C', rank: '2' },
]

class Deck extends Array {
  constructor() {
    super()
    this.perfectDeck = []
    for (const {suit, rank} of cardValues) {
      this.perfectDeck.push(new Card(suit, rank))
    }
    this.setDeck(this.perfectDeck)
    this.shuffle()
    this.isPerfect()
  }

  shuffle() {
    this.sort(() => Math.random() - 0.5)
  }

  isPerfect() {
    let i = 0
    let perfect = true
    for (const card of this) {
      const perfectCard = this.perfectDeck[i]
      if (!card.equals(perfectCard)) {
        perfect = false
        break
      } else {
        p = true
        console.log(card, perfectCard)
        i++
      }
    }

    if (perfect) {
      this.shuffle()
      return this.isPerfect()    }

    return perfect
  }

  setDeck(newDeck) {
    for (const card of this) {
      this.pop()
    }
    for (const card of newDeck) {
      this.unshift(card)
    }
  }
}
