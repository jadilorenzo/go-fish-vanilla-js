describe('Game View', () => {
  const view = new GameView({ game: new Game(), playerName: 'Player' })
  const container = document.createElement('div')

  afterEach(() => {
    container.remove()
  })

  it('has a game', () => {
    expect(view.game()).toBeTruthy()
  })
})
