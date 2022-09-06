describe('Game', () => {
  it('exists', () => {
    const g = new Game()
    expect(g).toBeTruthy()
  })

  it('includes list of players', () => {
    const g = new Game([new Player('p1'), new Player('p2')])
    expect(g.players).toBeTruthy()
    expect(g.players.length).toBe(2)
  })
})
