class GoFishController {
  container() {
    return document.getElementById('main')
  }

  login() {
    const view = new LoginView(this.startGame.bind(this))
    view.draw(this.container())
  }

  startGame({ name, bots }) {
    const player = new Player(name)
    const users = [player].concat(new Array(Number(bots)).fill(new Bot()))
    console.log(users)
    const game = new Game(users)
    const view = new GameView({ game, playerName: name })
    view.draw(this.container())
  }
}

window.controller = new GoFishController()
window.onload = controller.login.bind(window.controller)
