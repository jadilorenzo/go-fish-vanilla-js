describe('Game View', () => {
  const view = new GameView(new Game())
  const container = document.createElement('div')

  afterEach(() => {
    container.remove()
  })

  it('has a game', () => {
    expect(view.game).toBeTruthy()
  })
})
