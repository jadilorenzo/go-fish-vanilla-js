describe('Game View', () => {
  const view = new GameView({ game: new Game(), playerName: 'Player' })
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
})
