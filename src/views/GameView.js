class GameView {
  constructor(game) {
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
    container.innerHTML = ''
    const element = document.createElement('div')
    element.innerHTML = this.markup
    container.appendChild(element)

    this.populateGameView()
    return element
  }
}
