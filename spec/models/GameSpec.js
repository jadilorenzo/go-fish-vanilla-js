describe('Game Model', () => {
  it('has all neccesary appendages', () => {
    const game = new Game()
    expect(game).toBeTruthy()
    expect(game.players()).toBeTruthy()
    expect(game.players().length).toBe(2)
    expect(game.deck()).toBeTruthy()
    expect(game.deck().length).toBe(52)
  })

  it('allows multiple goFish', () => {
    const game = new Game()
    game._goFish()
    expect(game.deck().length).toBe(51)
    game._nextTurn()
    game._goFish()
    expect(game.players()[1].name).toBe('Billy Bob')
    expect(game.players()[1].hand().length).toBe(1)
    expect(game.deck().length).toBe(50)
    expect(game.players()[0].name).toBe('Player 1')
  })

  it('deals 7 cards to each player', () => {
    const game = new Game()
    game.deal()
    expect(game.deck().length).toBe(52 - 14)
    expect(game.currentPlayer().name).toBe('Player 1')
    expect(game.players()[0].hand().length).toBe(7)
    expect(game.players()[1].hand().length).toBe(7)
  })

  it('asks for a rank of card', () => {
    const game = new Game()
    game.deal()
    game.takeTurn({ givingPlayerIndex: 1, rank: 'A' })
    console.log(game)
    expect(game.players()[1].hand().length).toBe(6)
    expect(game.players()[0].hand().length).toBe(8)
    expect(game.players()[0].hand()[7].rank()).toBe('A')
  })

  it('draws if no matching card from player', () => {
    const game = new Game()
    game.deal()
    game.takeTurn({ givingPlayerIndex: 1, rank: 'Q' })
    expect(game.players()[0].hand().length).toBe(8)
    expect(game.players()[1].hand().length).toBe(7)
  })

  it('cycles throup turns', () => {
    const game = new Game()
    expect(game._turn).toBe(0)
    game._nextTurn()
    expect(game._turn).toBe(1)
    game._nextTurn()
    expect(game._turn).toBe(0)
    game._nextTurn()
    expect(game._turn).toBe(1)
  })

  it('plays more than one round', () => {
    const game = new Game()
    game.deal()
    game.takeTurn({ givingPlayerIndex: 1, rank: 'Q' })
    game.takeTurn({ givingPlayerIndex: 0, rank: 'A' })
    game.takeTurn({ givingPlayerIndex: 1, rank: 'K' })
    game.takeTurn({ givingPlayerIndex: 0, rank: 'A' })
    expect(game.players()[0].hand().length).toBe(7)
    expect(game.players()[1].hand().length).toBe(9)
  })

  it('plays through bots back to player', () => {
    const game = new Game(
      [
        new Player('Beorge Gush'),
        new Bot('COA'),
        new Bot('Pon Raul'),
        new Bot('Oarack Bbama'),
      ],
    )
    game.start()
    game.playRound({
      givingPlayerIndex: game
        .currentPlayer()
        .generateOtherPlayerIndex({ index: game._turn, range: game.players().length }),
      rank: game
        .currentPlayer()
        .generateRandomRankFromHand({ hand: game.currentPlayer().hand() }),
    })

    expect(game.currentPlayer().bot).toBe(undefined)
  })

  it('plays a complete game', () => {
    const game = new Game(
      [
        new Player('Beorge Gush'),
        new Bot('COA'),
        new Bot('Pon Raul'),
        new Bot('Oarack Bbama'),
      ],
    )
    game.start()

    while (!game.gameOver()) {
      game.playRound({
        givingPlayerIndex: game
          .currentPlayer()
          .generateOtherPlayerIndex({ index: game._turn, range: game.players().length }),
        rank: game
          .currentPlayer()
          .generateRandomRankFromHand({ hand: game.currentPlayer().hand() }),
      })
    }

    expect(game.currentPlayer().hand().length).toBe(0)
  })
})
