class HeaderView extends View {
  constructor({ playerName }) {
    super()
    this.markup = (
      `
        <div class='header'>
            <div class='logo'>🐟</div>
            <div class='title'> Go Fish</div>
            <div class='flex-grow'></div>
            <div class='login-status'>${playerName ? `Logged in as: ${playerName}` : 'Not logged in'}</div>
        </div>
      `
    )
  }

  draw(container) {
    return this.render({ container })
  }
}
