describe('View', () => {
  let view = new View()
  const container = document.createElement('div')

  afterEach(() => {
    container.remove()
  })

  it('has player name and initial', () => {
    view = new View(new Player('Beffrey Jezos'))
    view.markup = 'Hello World'
    document.body.appendChild(container)
    const element = view.render({ container })

    expect(element.textContent).toBe('Hello World')
  })
})
