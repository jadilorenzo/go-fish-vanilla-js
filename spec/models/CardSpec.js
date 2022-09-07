describe('Card', () => {
  it('only allows approprate values', () => {
    expect(new Card('foo', 'baz').rank()).toBe(undefined)
  })

  it('compares cards', () => {
    card1 = new Card('D', 'A')
    card2 = new Card('D', 'A')
    expect(card1.equals(card2)).toBeTruthy()
  })
})
