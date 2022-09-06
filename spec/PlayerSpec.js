describe('Player', () => {
  it('exists', () => {
    const p = new Player('name')
    expect(p.name).toBe('name')
  })
})
