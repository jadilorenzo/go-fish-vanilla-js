describe('Hand View', () => {
  let response = null
  const view = new HandView({
    cards: [new Card('H', 'A')],
    setRank: ({ rank }) => { response = rank },
  })
  const container = document.createElement('div')

  beforeEach(() => {
    document.body.appendChild(container)
    view.draw(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('shows cards', () => {
    const element = view.draw(container)
    expect(element.textContent.includes('Hand')).toBeTrue()
  })
})
