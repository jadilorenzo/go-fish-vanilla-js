describe('Hand View', () => {
  const view = new HandView([new Card('H', 'A')])
  const container = document.createElement('div')

  afterEach(() => {
    container.remove()
  })

  it('shows cards', () => {
    const element = view.draw(container)
    expect(element.textContent.includes('Hand')).toBeTrue()
  })
})
