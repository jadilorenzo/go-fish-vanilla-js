describe('View', () => {
  const view = new HeaderView({ playerName: 'Beffrey Jezos' })
  const container = document.createElement('div')

  afterEach(() => {
    container.remove()
  })

  it('has player name in header', () => {
    const element = view.draw(container)
    expect(element.textContent.includes('Beffrey Jezos')).toBeTruthy()
  })
})
