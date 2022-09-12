class GameOverView extends View {
  constructor({
    game,
    playerName,
  }) {
    super()
    this._game = game
    this._playerName = playerName
    this.markup = (
      `
        <div>
            <div id='header'></div>
            <div class='body'>
                <h2>Game Over</h2>
                <div class='game-over group'>
                    <div class='players' id='ordered-players'>
                    </div>
                </div>
            </div>
        </div>
      `
    )
  }

  game() {
    return this._game
  }

  orderedPlayers() { return document.getElementById('ordered-players') }

  headerElement() { return document.getElementById('header') }

  drawPlayers({ element }) {
    this._game.players().sort((player1, player2) => (
      player2.books().length - player1.books().length
    )).forEach((player, index) => {
      const playerView = new PlayerOverView({
        player,
        index,
      })
      playerView.draw(element)
    })
  }

  drawHeader({ element }) {
    new HeaderView({ playerName: this._playerName }).draw(element)
  }

  populateGameOverView() {
    this.drawPlayers({ element: this.orderedPlayers() })
    this.drawHeader({ element: this.headerElement() })
  }

  draw(container) {
    const element = this.render({ container })
    this.populateGameOverView()
    return element
  }
}
