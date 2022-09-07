describe('Game', () => {
  it('has all neccesary appendages', () => {
    const game = new Game([new Player('p1')])
    expect(game).toBeTruthy()
    expect(game.players()).toBeTruthy()
    expect(game.players().length).toBe(2)
    expect(game.deck()).toBeTruthy()
    expect(game.deck().length).toBe(52)
  })

  it('allows multiple goFish', () => {
    const game = new Game([new Player('p1')])
    game._goFish()
    expect(game.deck().length).toBe(51)
    game._nextTurn()
    game._goFish()
    expect(game._currentPlayer().name).toBe('Billy Bob')
    expect(game._lastPlayer().hand().length).toBe(1)
    expect(game.deck().length).toBe(50)
    expect(game._lastPlayer().name).toBe('p1')
  })

  it('deals 7 cards to each player', () => {
    const game = new Game([new Player('p1')])
    game.deal()
    expect(game.deck().length).toBe(52 - 14)
    expect(game._currentPlayer().name).toBe('p1')
    expect(game.players()[0].hand().length).toBe(7)
    expect(game.players()[1].hand().length).toBe(7)
  })

  it('asks for a rank of card', () => {
    const game = new Game([new Player('p1')])
    game.deal()
    game.takeTurn(1, 'A')
    expect(game.players()[1].hand().length).toBe(6)
    expect(game.players()[0].hand()[7].rank()).toBe('A')
    expect(game.players()[0].hand().length).toBe(8)
  })

  it('draws if no matching card from player', () => {
    const game = new Game([new Player('p1')])
    game.deal()
    game.takeTurn(1, 'Q')
    expect(game.players()[0].hand().length).toBe(8)
    expect(game.players()[1].hand().length).toBe(7)
  })
})
