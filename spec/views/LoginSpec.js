describe('Login View', () => {
  let view = new LoginView()
  const container = document.createElement('div')

  afterEach(() => {
    container.remove()
  })

  it('gets a login response', () => {
    let recievedValue = null
    view = new LoginView((response) => { recievedValue = response })
    document.body.appendChild(container)
    view.draw(container)
    view.nameInputElement().value = 'Befferry Jezos'
    view.botsInputElement().value = 1
    view.submitButtonElement().click()

    expect(recievedValue.bots).toBe('1')
    expect(recievedValue.name).toBe('Befferry Jezos')
  })
})
