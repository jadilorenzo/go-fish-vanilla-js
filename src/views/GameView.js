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
  }

  game() {
    return this._game
  }

  playerListElement() { return document.getElementById('players') }

  headerElement() { return document.getElementById('header') }

  handElement() { return document.getElementById('hand') }

  drawPlayers({ element }) {
    this._game.players().forEach((player, index) => {
      const currentPlayer = index === this._game._playerIndex
      const playerView = new PlayerView(player, index, currentPlayer)
      playerView.draw(element)
    })
  }

  drawHeader({ element }) {
    new HeaderView({ playerName: this._playerName }).draw(element)
  }

  drawHand({ element }) {
    console.log({ cards: this._game.players()[0].hand() })
    new HandView({ cards: this._game.players()[0].hand() }).draw(element)
  }

  populateGameView() {
    this.drawPlayers({ element: this.playerListElement() })
    this.drawHeader({ element: this.headerElement() })
    this.drawHand({ element: this.handElement() })
    this.handleDealButton({ element: this.dealButtonElement() })
  }

  draw(container) {
    const element = this.render({ container })
    this.populateGameView()
    return element
  }
}
