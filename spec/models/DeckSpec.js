describe('Deck Model', () => {
  const deck = new Deck()

  it('has 52 cards', () => {
    expect(deck.length).toBe(52)
  })

  it('will shuffle', () => {
    const deck1 = new Deck()
    const deck2 = new Deck()

    expect(deck1).toEqual(deck2)

    deck1.shuffle()
    expect(deck1).not.toEqual(deck2)
  })
})
