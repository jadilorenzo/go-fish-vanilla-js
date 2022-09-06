describe('Deck', () => {
  const deck = new Deck()

  it('has 52 cards', () => {
    expect(deck.length).toBe(52)
  })

  it('will shuffle', () => {
    deck.shuffle()
    const deck2 = new Deck()
    deck2.shuffle()

    expect(deck.cards).not.toBe(deck2.cards)
  })
})
