class PlayerView {
  constructor(player, index) {
    this.index = index
    this.player = player
    this.markup = (
      `
      <div>
          <span id='player-initial-${index}'></span>
          <h3 id='player-name-${index}'></h3>
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
    this.nameElement().textContent = this.player.name
  }

  draw(element) {
    const div = document.createElement('div')
    div.innerHTML = this.markup
    element.appendChild(div)
    this.populatePlayerView()
    return element
  }
}
