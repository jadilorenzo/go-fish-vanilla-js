describe('Game', () => {
  let game = new Game([new Player('p1')])

  it('exists', () => {
    expect(game).toBeTruthy()
  })

  it('has 2 players', () => {
    expect(game.players).toBeTruthy()
    expect(game.players.length).toBe(2)
  })

  it('has 52 card deck', () => {
    expect(game.deck).toBeTruthy()
    expect(game.deck.length).toBe(52)
  })
})
