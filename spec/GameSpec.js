describe('Game', () => {
  let game

  it('exists', () => {
    game = new Game()
    expect(game).toBeTruthy()
  })

  it('has 2 players', () => {
    game = new Game([new Player('p1')])
    expect(game.players).toBeTruthy()
    expect(game.players.length).toBe(2)
  })

  it('has 52 card deck', () => {
    game = new Game()
    expect(game.deck).toBeTruthy()
    expect(game.deck.length).toBe(52)
  })

  game = new Game([new Player('p1')])

  it('allows player to draw', () => {
    game = new Game([new Player('p1')])
    expect(game.deck.length).toBe(52)
    game.draw()
    console.log(game)
    expect(game.players[0].hand.length).toBe(1)
    expect(game.deck.length).toBe(51)
  })

  it('allows bot to draw after player', () => {
    game = new Game([new Player('p1')])
    game.draw()
    expect(game.deck.length).toBe(51)
    game.draw()
    console.log(game)
    expect(game.players[1].hand.length).toBe(1)
    expect(game.deck.length).toBe(50)
    expect(game.playerIndex).toBe(0)
  })
})
