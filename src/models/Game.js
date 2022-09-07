class Game {
  constructor(players = [new Player('Player 1')]) {
    this._players = [...players, new Bot()]
    this._deck = new Deck()
    this._playerIndex = 0
  }

  players() {
    return this._players
  }

  deck() {
    return this._deck
  }

  lastPlayer() {
    const player = (this._playerIndex !== 0)
      ? this._players[this._playerIndex - 1]
      : this._players[this._players.length - 1]
    return player
  }

  currentPlayer() {
    return this._players[this._playerIndex]
  }

  goFish() {
    const topCard = this._deck.draw()
    this._players[this._playerIndex].take([topCard])
    return topCard
  }

  nextTurn() {
    this._playerIndex = (this._playerIndex === this._players.length - 1)
      ? 0
      : this._playerIndex + 1
  }

  deal() {
    for (let index = 0; index < this._players.length * 7; index++) {
      this.goFish()
      this.nextTurn()
    }
    this._playerIndex = 0
  }

  askFor(givingPlayerIndex, rank) {
    const cards = this._players[givingPlayerIndex].give(rank)
    this._players[this._playerIndex].take(cards)
    return cards
  }

  takeTurn(givingPlayerIndex, rank) {
    if (this.askFor(givingPlayerIndex, rank).length === 0) {
      if (!this.goFish().hasSuit(rank)) {
        this.nextTurn()
      }
    }
  }
}
