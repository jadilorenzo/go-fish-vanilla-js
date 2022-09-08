class GameView extends View {
  constructor({ game, playerName }) {
    super()
    this._game = game
    this._playerName = playerName
  }

  game() {
    return this._game
  }

  markup = (
    `
    <div>
        <div id='header'></div>
        <div class='body'>
        <div id='players'></div>
        </div>
    </div>
   `
  )

  playerListElement() {
    return document.getElementById('players')
  }

  headerElement() { return document.getElementById('header') }

  drawPlayers({ element }) {
    this._game.players().forEach((player, index) => {
      const playerView = new PlayerView(player, index)
      playerView.draw(element)
    })
  }

  populateGameView() {
    this.drawPlayers({ element: this.playerListElement() })
    new HeaderView({ playerName: this._playerName }).draw(this.headerElement())
  }

  draw(container) {
    this.render({ container })
    this.populateGameView()
    return element
  }
}
