describe('GameOver View', () => {
  const view = new GameOverView({ game: new Game() })
  const container = document.createElement('div')

  let element

  beforeEach(() => {
    document.body.appendChild(container)
    element = view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('has a game', () => {
    expect(view.game()).toBeTruthy()
  })

  it('has a list of players', () => {
    expect(element.textContent.includes('Billy Bob')).toBeTrue()
    expect(element.textContent.includes('Player 1')).toBeTrue()
  })
})
