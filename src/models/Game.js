class Game {
  _turn = 0

  _cardsPerPerson = 7

  constructor(players = [new Player('Player 1'), new Bot()]) {
    this._players = players
    this._deck = new Deck()
  }

  players(givingPlayerIndex) {
    if (givingPlayerIndex === undefined) {
      return this._players
    }
    return this._players[givingPlayerIndex]
  }

  deck() {
    return this._deck
  }

  currentPlayer() {
    if (this._turn >= 0 || this._turn < this.players.length) {
      return this._players[this._turn]
    }
    throw new Error(`Turn count out of range. _turn is ${this._turn}.`)
  }

  _nextTurn() {
    this._turn = (this._turn === this._players.length - 1)
      ? 0
      : this._turn + 1
  }

  _goFish({ rank = '' } = {}) {
    const topCard = this._deck.draw()
    this.currentPlayer().take({ cards: topCard ? [topCard] : [] })
    return topCard?.rank() === rank
  }

  deal() {
    for (let index = 0; index < this._players.length * this._cardsPerPerson; index++) {
      this._goFish()
      this._nextTurn()
    }
    this._turn = 0
  }

  start() {
    this._deck.shuffle()
    this.deal()
  }

  _askFor({ givingPlayerIndex, rank }) {
    const cards = this.players(givingPlayerIndex).give({ rank })
    this.currentPlayer().take({ cards })
    return cards
  }

  playRound({ givingPlayerIndex, rank, addStat }) {
    this.takeTurn({ givingPlayerIndex, rank, addStat })
    if (this.currentPlayer().isBot) {
      this.playRound({ addStat })
    }
  }

  gameOver() {
    const noCardsInHands = this._players
      .filter((player) => player.hand().length <= 0)
      .length > this.players().length - 1
    const emptyDeck = this.deck().length === 0
    return noCardsInHands && emptyDeck
  }

  _addStat(key, { rank, addStat, givingPlayerIndex }) {
    const stats = {
      ask: `asked for cards of rank ${rank}`,
      unmatchedDraw: ' drew a card.',
      matchedDraw: `drew a card of rank ${rank}`,
      successfulAsk: `recieved cards with rank ${rank} from ${this.players()[givingPlayerIndex].name}`,
    }
    addStat({ stat: this.currentPlayer().name, detail: stats[key] })
  }

  takeTurn({
    givingPlayerIndex = this.currentPlayer()
      ?.generateOtherPlayerIndex({ index: this._turn, range: this.players().length }),
    rank = this.currentPlayer()?.generateRandomRankFromHand({ hand: this.currentPlayer().hand() }),
    addStat = () => {},
  }) {
    if (this._askFor({ givingPlayerIndex, rank }).length === 0) {
      this._addStat('ask', { rank, addStat, givingPlayerIndex })
      if (!this._goFish({ rank })) {
        this._addStat('unmatchedDraw', { rank, addStat, givingPlayerIndex })
        this._nextTurn()
      } else {
        this._addStat('matchedDraw', { rank, addStat, givingPlayerIndex })
      }
    } else {
      this._addStat('successfulAsk', { rank, addStat, givingPlayerIndex })
    }
  }
}
