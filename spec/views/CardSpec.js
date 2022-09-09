describe('Card View', () => {
  const container = document.createElement('div')

  beforeEach(() => {
    document.body.appendChild(container)
  })

  afterEach(() => {
    container.remove()
  })

  it('shows cards', () => {
    const view = new CardView({
      card: new Card('H', 'A'),
      index: 0,
    })
    view.draw(container)
    expect(view.cardElement(0)).toBeTruthy()
  })

  it('selects rank on click', () => {
    let response
    const view = new CardView({
      card: new Card('H', 'A'),
      index: 0,
      selectRank: ({ rank }) => { response = rank },
    })
    view.draw(container)
    view.cardElement(0).click()
    expect(response).toBe('A')
  })
})
