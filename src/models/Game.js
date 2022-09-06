class Game {
  constructor(players = [new Player('Player 1')]) {
    this.players = [...players, new Bot()]
    this.deck = new Deck()
    this.playerIndex = 0

  }

  draw() {
    this.players[this.playerIndex].take(this.deck.draw())
    this.nextTurn()
  }

  nextTurn() {
    if (this.playerIndex === this.players.length - 1) {
        this.playerIndex = 0
    } else {
        this.playerIndex++
    }
  }
}
