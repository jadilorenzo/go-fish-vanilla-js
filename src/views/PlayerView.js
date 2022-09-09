class PlayerView extends View {
  constructor({
    player,
    index,
    currentPlayer,
    button = false,
    playerTurn = false,
    ask = () => {},
  }) {
    super()
    this.ask = ask
    this.index = index
    this.player = player
    this.markup = (
      `
      <div class='player'>
          <div class='player-initial-circle'>
            <span class='player-initial' id='player-initial-${index}'></span>
          </div>
          <div class='player-name player-name-${currentPlayer ? 'bold' : ''}' id='player-name-${index}'></div>
          <div class='flex-grow'></div>
          ${(button && this.index !== 0 && playerTurn) ? `<button id='player-button-${index}'>Ask</button>` : ''}
      </div>
      `
    )
  }

  initialElement() { return document.getElementById(`player-initial-${this.index}`) }

  nameElement() { return document.getElementById(`player-name-${this.index}`) }

  askButtonElement() { return document.getElementById(`player-button-${this.index}`) }

  callAsk() {
    this.ask({ index: this.index })
  }

  handleOnClick() {
    const element = this.askButtonElement()
    if (element) { element.onclick = this.callAsk.bind(this) }
  }

  populatePlayerView() {
    this.initialElement().textContent = this.player.name.split('')[0]
    this.nameElement().textContent = (
      `${this.player.name} ${this.index === 0 ? '(you)' : ''} - ${this.player.hand().length} card${this.player.hand().length === 1 ? '' : 's'}`
    )
    this.handleOnClick()
  }

  draw(container) {
    const element = this.render({ container, clear: false })
    this.populatePlayerView()
    return element
  }
}
