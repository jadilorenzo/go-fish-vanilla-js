describe('Login View', () => {
  let view = new LoginView()
  const container = document.createElement('div')

  afterEach(() => {
    container.remove()
  })

  it('has player name and initial', () => {
    view = new PlayerView(new Player('Beffrey Jezos'))
    document.body.appendChild(container)
    view.draw(container)

    expect(view.nameElement().textContent).toBe('Beffrey Jezos')
    expect(view.initialElement().textContent).toBe('B')
  })
})
