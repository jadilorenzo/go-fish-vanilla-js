describe('Game View', () => {
  let view = new GameView({ game: new Game(), playerName: 'Player' })
  const container = document.createElement('div')

  beforeEach(() => {
    document.body.appendChild(container)
    view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('has a game', () => {
    expect(view.game()).toBeTruthy()
  })

  it('recieves rank on card click', () => {
    view.cardElement(0).click()
    expect(view.currentRank).not.toBe('')
  })

  it('plays round', () => {
    view = new GameView({ game: new Game(), playerName: 'Player' })
    view._game = new Game()
    view._game.deal()
    view.draw(container)

    view.cardElement('D_A').click()
    view.askButtonElement(1).click()
    expect(view.game().players()[0].hand().length).toBe(8)
    expect(view.game().players()[1].hand().length).toBe(6)
    expect(view.game().currentPlayer().bot).toBe(undefined)
  })

  it('plays round', () => {
    view = new GameView({ game: new Game(), playerName: 'Player' })
    view._game = new Game()
    view._game.deal()
    view.draw(container)

    view.cardElement(0).click()
    view.askButtonElement(1).click()
    expect(view.game().players()[0].hand().length).toBe(8)
    expect(view.game().players()[1].hand().length).toBe(8)
    expect(view.game().currentPlayer().bot).toBe(undefined)
  })

  it('plays game', () => {
    let res = false
    view = new GameView({ game: new Game(), playerName: 'Player', callGameOver: () => { res = true } })
    view._game = new Game()
    view._game.deal()
    view.draw(container)

    while (!view.game().gameOver()) {
      view.cardElement(0).click()
      view.askButtonElement(1).click()
    }
    expect(view.game().players()[0].hand().length).toBe(0)
    expect(view.game().players()[1].hand().length).toBe(0)
    expect(view.game().currentPlayer().bot).toBe(undefined)
    expect(res).toBe(true)
  })
})
