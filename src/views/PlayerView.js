class PlayerView extends View {
  constructor(player, index, currentPlayer) {
    super()
    this.index = index
    this.player = player
    this.markup = (
      `
      <div class='player'>
          <div class='player-initial-circle'>
            <span class='player-initial' id='player-initial-${index}'></span>
          </div>
          <div class='player-name player-name-${currentPlayer ? 'bold' : ''}' id='player-name-${index}'></div>
      </div>
      `
    )
  }

  initialElement() {
    return document.getElementById(`player-initial-${this.index}`)
  }

  nameElement() {
    return document.getElementById(`player-name-${this.index}`)
  }

  populatePlayerView() {
    this.initialElement().textContent = this.player.name.split('')[0]
    this.nameElement().textContent = `${this.player.name} ${this.index === 0 ? '(you)' : ''}`
  }

  draw(container) {
    const element = this.render({ container, clear: false })
    this.populatePlayerView()
    return element
  }
}
