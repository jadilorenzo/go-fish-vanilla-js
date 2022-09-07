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
    view.nameInput().value = 'Befferry Jezos'
    view.botsInput().value = 1
    view.submitButton().click()

    expect(recievedValue.bots).toBe('1')
    expect(recievedValue.name).toBe('Befferry Jezos')
  })
})
