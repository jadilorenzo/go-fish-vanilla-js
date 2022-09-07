describe('Game', () => {
  it('exists', () => {
    const game = new Game()
    expect(game).toBeTruthy()
  })

  it('has 2 players', () => {
    const game = new Game([new Player('p1')])
    expect(game.players()).toBeTruthy()
    expect(game.players().length).toBe(2)
  })

  it('has 52 card deck', () => {
    const game = new Game()
    expect(game.deck()).toBeTruthy()
    expect(game.deck().length).toBe(52)
  })

  it('allows player to draw', () => {
    const game = new Game([new Player('p1')])
    expect(game.deck().length).toBe(52)
    game.draw()
    expect(game.lastPlayer().hand().length).toBe(1)
    expect(game.deck().length).toBe(51)
  })

  it('allows bot to draw after player', () => {
    const game = new Game([new Player('p1')]) // 0
    game.draw()
    expect(game.deck().length).toBe(51)
    game.draw()
    expect(game.lastPlayer().name).toBe('Billy Bob')
    expect(game.lastPlayer().hand().length).toBe(1)
    expect(game.deck().length).toBe(50)
    expect(game.currentPlayer().name).toBe('p1')
  })

  it('deals 7 cards to each player', () => {
    const game = new Game([new Player('p1')])
    game.deal()
    expect(game.deck().length).toBe(52 - 14)
    expect(game.currentPlayer().name).toBe('p1')
    expect(game.players()[0].hand().length).toBe(7)
    expect(game.players()[1].hand().length).toBe(7)
  })

  it('gives a card', () => {
    const game = new Game([new Player('p1')])
    game.deal()
    game.give(0, 1, 0)
    expect(game.currentPlayer().hand().length).toBe(6)
    expect(game.lastPlayer().hand().length).toBe(8)
  })

  it('asks for a rank of card', () => {
    const game = new Game([new Player('p1')])
    game.deal()
    game.askFor(1, 'A')
    expect(game.currentPlayer().hand().length).toBe(6)
    expect(game.lastPlayer().hand().length).toBe(8)
  })
})
