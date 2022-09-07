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
    const player = (this._playerIndex !== 0) ?
        this._players[this._playerIndex - 1] :
        this._players[this._players.length - 1]
    return player
  }

  currentPlayer() {
    return this._players[this._playerIndex]
  }

  draw() {
    this._players[this._playerIndex].take(this._deck.draw())
    this.nextTurn()
  }

  nextTurn() {
    (this._playerIndex === this._players.length - 1) ?
        this._playerIndex = 0 :
        this._playerIndex++
  }

  deal() {
    for (let index = 0; index < this._players.length * 7; index++) {
      this.draw()
    }
    this._playerIndex = 0
  }

  give(recievingPlayerIndex, givingPlayerIndex, cardIndex) {
    const card = this._players[recievingPlayerIndex].give(cardIndex)
    this._players[givingPlayerIndex].take(card)
  }
}
