class GoFishController {
  botNames = [
    'Tonald Drump',
    'Boe Jiden',
    'Pancy Nelosi',
    'Ced Truz',
  ]

  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
  }

  _generateUsers({ player, bots }) {
    const players = [player]
    for (let index = 0; index < Number(bots); index++) {
      const name = this.botNames[index]
      players.push(new Bot(name))
    }
    return players
  }

  callGameOver({ game, playerName }) {
    const gameOverView = new GameOverView({
      game,
      playerName,
    })
    gameOverView.draw(this.container())
  }

  startGame({ name, bots }) {
    const player = new Player(name)
    const users = this._generateUsers({ player, bots })
    console.log(users)
    const newGame = new Game(users)
    const view = new GameView({
      game: newGame,
      playerName:
      name,
      callGameOver: ({ game, playerName }) => {
        this.callGameOver({ game, playerName })
      },
    })
    view.draw(this.container())
  }
}

window.controller = new GoFishController()
window.onload = controller.login.bind(window.controller)
