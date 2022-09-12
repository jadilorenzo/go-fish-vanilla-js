class GameView extends View {
  constructor({ game, playerName, callGameOver }) {
    super()
    this._game = game
    this._playerName = playerName
    this.callGameOver = callGameOver
    this.markup = (
      `
        <div>
            <div id='header'></div>
            <div class='body'>
                <div class='players group' id='players'></div>
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

  ask({ index }) {
    this._game.playRound({ givingPlayerIndex: index, rank: this.currentRank })
    if (this._game.currentPlayer().hand().length === 0) {
      if (!this._game.gameOver()) {
        this.ask({ index })
      } else {
        this.callGameOver({
          game: this.game(),
          playerName: this._playerName,
        })
      }
    }
    this.playerListElement().innerHTML = ''
    this.populateGameView()
  }

  drawPlayers({ element, button = false }) {
    this._game.players().forEach((player, index) => {
      const currentPlayer = index === this._game._playerIndex
      const playerTurn = this._game._playerIndex === 0
      const playerView = new PlayerView({
        player,
        index,
        currentPlayer,
        button,
        playerTurn,
        ask: ({ givingPlayerIndex }) => this.ask({ index: givingPlayerIndex }),
      })
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
