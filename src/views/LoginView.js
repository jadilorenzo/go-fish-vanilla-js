class LoginView {
  constructor(onLogin) {
    this.onLogin = onLogin
  }

  markup = (
    `
    <form class='user-form'>
        <label for='name'>Name</label>
        <input id='name' type='text' required value='User'/>
        <label for='bots'>Number of Bots</label>
        <input id='bots' type='number' value='1' />
        <input id='submit' type='submit' value='Login' />
    </form>
   `
  )

  nameInputElement() { return document.getElementById('name') }

  botsInputElement() { return document.getElementById('bots') }

  submitButtonElement() { return document.getElementById('submit') }

  onSubmit(event) {
    event.preventDefault()
    this.onLogin({ name: event.target.name.value, bots: event.target.bots.value })
  }

  draw(container) {
    container.innerHTML = ''
    const element = document.createElement('div')
    element.innerHTML = this.markup
    element.onsubmit = this.onSubmit.bind(this)
    container.appendChild(element)
    return element
  }
}
