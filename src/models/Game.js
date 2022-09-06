class Game {
  constructor(players) {
    this.players = [...players, new Bot()]
  }
}
