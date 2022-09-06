describe('Game', () => {
  const g = new Game([new Player('p1'), new Player('p2')])

  it('exists', () => {
    expect(g).toBeTruthy()
  })

  it('includes list of players', () => {
    expect(g.players).toBeTruthy()
    expect(g.players.length).toBe(2)
  })

  // it('has a deck of 52', () => {
  //   expect(g.deck).toBeTruthy()
  //   expect(g.deck?.length).toBe(52)
  // })
})
