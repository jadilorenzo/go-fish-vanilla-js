class Game {
  constructor(players) {
    this.players = [...players, new Bot()]
    this.deck = new Deck()
  }
}
