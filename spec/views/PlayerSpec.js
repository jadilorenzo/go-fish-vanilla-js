describe('Player View', () => {
  let view = new LoginView()
  const container = document.createElement('div')

  beforeEach(() => {
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('has player name and initial', () => {
    view = new PlayerView({ player: new Player('Beffrey Jezos') })
    view.draw(container)
    expect(view.nameElement().textContent.includes('Beffrey Jezos')).toBeTrue()
    expect(view.initialElement().textContent).toBe('B')
  })
})
