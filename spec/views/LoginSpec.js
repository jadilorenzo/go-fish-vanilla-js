describe('Login View', () => {
  let view = new LoginView()
  const container = document.createElement('div')

  afterEach(() => {
    container.remove()
  })

  it('gets a login response', () => {
    let receivedValue = null
    view = new LoginView((response) => { receivedValue = response })
    document.body.appendChild(container)
    view.draw(container)
    view.nameInputElement().value = 'Befferry Jezos'
    view.botsInputElement().value = 1
    view.submitButtonElement().click()

    expect(receivedValue.bots).toBe('1')
    expect(receivedValue.name).toBe('Befferry Jezos')
  })

  it('doesn\'t allow more than four bots', () => {
    let receivedValue = null
    view = new LoginView((response) => { receivedValue = response })
    document.body.appendChild(container)
    view.draw(container)
    view.botsInputElement().value = 5
    view.submitButtonElement().click()

    expect(receivedValue).toBe(null)
  })
})
