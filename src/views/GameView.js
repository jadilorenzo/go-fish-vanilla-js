class GameView extends View {
  constructor(game) {
    super()
    this._game = game
  }

  game() {
    return this._game
  }

  markup = (
    `
    <div>
        <div id='players'></div>
        <h1>Go FIIISH</h1>
    </div>
   `
  )

  playerListElement() {
    return document.getElementById('players')
  }

  drawPlayers(element) {
    this._game.players().forEach((player, index) => {
      const playerView = new PlayerView(player, index)
      playerView.draw(element)
    })
  }

  populateGameView() {
    this.drawPlayers(this.playerListElement())
  }

  draw(container) {
    this.render({ container })
    this.populateGameView()
    return element
  }
}
