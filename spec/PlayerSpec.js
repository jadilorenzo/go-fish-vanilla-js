describe('Player', () => {
  it('exists', () => {
    const player = new Player('name')
    expect(player.name).toBe('name')
    expect(player.hand.length).toBe(0)
    expect(player.books.length).toBe(0)
  })
})
