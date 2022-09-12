describe('PlayerOver View', () => {
  const view = new PlayerOverView({ player: new Player('Boe Jiden') })
  const container = document.createElement('div')

  let element

  beforeEach(() => {
    document.body.appendChild(container)
    element = view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('has a player', () => {
    expect(element.textContent.includes('Boe Jiden')).toBeTrue()
  })
})
