describe('Login', () => {
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
    view.nameInput().value = 'Jefferry Bezos'
    view.submitButton().click()

    expect(recievedValue).not.toBe(null)
  })
})
