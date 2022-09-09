describe('Hand View', () => {
  let response = null
  const view = new HandView({ cards: [], setRank = ({ rank }) => { response = rank } })
  const container = document.createElement('div')

  afterEach(() => {
    container.remove()
  })

  it('shows cards', () => {
    const element = view.draw(container)
    expect(element.textContent.includes('Hand')).toBeTrue()
  })
})
