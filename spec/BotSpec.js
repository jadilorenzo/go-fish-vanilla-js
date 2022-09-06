describe('Bot', () => {
  it('generates name', () => {
    const p = new Bot()
    expect(p.name).toBe('Billy Bob')
  })
})
