describe('Player', () => {
  it('exists', () => {
    const player = new Player('name')
    expect(player.name).toBe('name')
    expect(player.hand().length).toBe(0)
    expect(player.books().length).toBe(0)
  })

  it('gets all indexes of a particular rank', () => {
    const player = new Player('name')
    player._hand.push(...[new Card('S', 'A'), new Card('H', 'A')])
    expect(player.findIndexesWithRank('A')).toEqual([0, 1])
  })
})
