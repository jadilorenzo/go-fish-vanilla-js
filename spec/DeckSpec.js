describe('Deck', () => {
  it('has 52 cards', () => {
    const d = new Deck()
    console.log(d)
    expect(d.length).toBe(52)
  })

  it('always shuffled', () => {
    const d = new Deck()
    d.setDeck(d.perfectDeck)

    expect(d.isPerfect()).toBeFalse()
  })
})
