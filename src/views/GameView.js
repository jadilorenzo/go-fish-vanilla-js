class GameView extends View {
  constructor({ game, playerName }) {
    super()
    this._game = game
    this._playerName = playerName
    this.markup = (
      `
        <div>
            <div id='header'></div>
            <div class='body'>
                <div id='players'></div>
                <div id='hand'></div>
            </div>
        </div>
      `
    )

    this._game.start()
    this.currentRank = ''
  }

  game() {
    return this._game
  }

  playerListElement() { return document.getElementById('players') }

  headerElement() { return document.getElementById('header') }

  handElement() { return document.getElementById('hand') }

  cardElement(index = this.index) { return document.getElementById(`card-${index}`) }

  drawPlayers({ element, button = false }) {
    this._game.players().forEach((player, index) => {
      const currentPlayer = index === this._game._playerIndex
      const playerView = new PlayerView(player, index, currentPlayer, button)
      playerView.draw(element)
    })
  }

  drawHeader({ element }) {
    new HeaderView({ playerName: this._playerName }).draw(element)
  }

  selectRank({ rank }) {
    this.currentRank = rank
    this.playerListElement().innerHTML = ''
    this.drawPlayers({ element: this.playerListElement(), button: true })
  }

  drawHand({ element }) {
    new HandView({
      cards: this._game.players()[0].hand(),
      selectRank: ({ rank }) => this.selectRank({ rank }),
    }).draw(element)
  }

  populateGameView() {
    this.drawPlayers({ element: this.playerListElement() })
    this.drawHeader({ element: this.headerElement() })
    this.drawHand({ element: this.handElement() })
  }

  draw(container) {
    const element = this.render({ container })
    this.populateGameView()
    return element
  }
}
