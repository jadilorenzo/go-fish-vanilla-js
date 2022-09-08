class LoginView extends View {
  constructor(onLogin) {
    super()
    this.onLogin = onLogin
  }

  markup = (
    `
    <div>
      <div id='header'></div>
      <div class='body'>
        <h2>Login</h2>
        <form class='user-form'>
            <label for='name'>Name</label>
            <input id='name' type='text' required value='User'/>
            <label for='bots'>Number of Bots</label>
            <input id='bots' type='number' value='1' />
            <input id='submit' type='submit' value='Login' />
        </form>
      </div>
    </div>
   `
  )

  nameInputElement() { return document.getElementById('name') }

  botsInputElement() { return document.getElementById('bots') }

  submitButtonElement() { return document.getElementById('submit') }

  headerElement() { return document.getElementById('header') }

  onSubmit(event) {
    event.preventDefault()
    this.onLogin({ name: event.target.name.value, bots: event.target.bots.value })
  }

  populateLoginView(element) {
    element.onsubmit = this.onSubmit.bind(this)
    new HeaderView({}).draw(this.headerElement())
  }

  draw(container) {
    const element = this.render({ container })
    this.populateLoginView(element)
    return element
  }
}
