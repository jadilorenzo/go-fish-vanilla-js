describe('Player Model', () => {
  it('exists', () => {
    const player = new Player('name')
    expect(player.name).toBe('name')
    expect(player.hand().length).toBe(0)
    expect(player.books().length).toBe(0)
  })

  it('asks for a rank of card', () => {
    const player = new Player([new Player('p1')])
    player.take({ cards: [new Card('S', 'A'), new Card('S', 'K'), new Card('H', 'A'), new Card('H', 'Q')] })
    const cards = player.give({ rank: 'A' })
    expect(cards[0].rank()).toBe('A')
    expect(cards[1].rank()).toBe('A')
  })

  it('creates a book when 4 duplicates present', () => {
    const player = new Player([new Player('p1')])
    player.take({
      cards: [
        new Card('D', 'A'),
        new Card('S', 'A'),
        new Card('H', 'A'),
        new Card('C', 'A'),
        new Card('H', '2'),
      ],
    })
    expect(player.hand().length).toBe(1)
    expect(player.books().length).toBe(1)
  })
})
