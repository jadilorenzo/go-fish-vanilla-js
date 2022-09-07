class LoginView {
  constructor(onLogin) {
    this.onLogin = onLogin
  }

  markup = (
    `
    <form class='user-form'>
        <label for='name'>Name</label>
        <input id='name' type='text'  />
        <label for='bots'>Number of Bots</label>
        <input id='bots' type='number'  />
        <input id='submit' type='submit' value='Login' />
    </form>
   `
  )

  nameInput() { return document.getElementById('name') }

  submitButton() { return document.getElementById('submit') }

  onSubmit(event) {
    event.preventDefault()
    this.onLogin(event.target.name.value)
  }

  draw(container) {
    const element = document.createElement('div')
    element.innerHTML = this.markup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }
}
