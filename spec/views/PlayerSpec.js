describe('Player View', () => {
  let view = new LoginView()
  const container = document.createElement('div')

  beforeEach(() => {
    document.body.appendChild(container)
    view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('has player name and initial', () => {
    view = new PlayerView(new Player('Beffrey Jezos'))

    expect(view.nameElement().textContent.includes('Beffrey Jezos')).toBeTrue()
    expect(view.initialElement().textContent).toBe('B')
  })
})
