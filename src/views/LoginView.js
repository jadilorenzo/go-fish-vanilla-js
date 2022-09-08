class LoginView extends View {
  constructor(onLogin) {
    super()
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
    const element = this.render({ container })
    element.onsubmit = this.onSubmit.bind(this)
    return element
  }
}
