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
          <div class='player-name-group'>
            <div class='player-initial-circle'>
              <span class='player-initial' id='player-initial-${index}'></span>
            </div>
            <div class='player-name player-name-${currentPlayer ? 'bold' : ''}' id='player-name-${index}'></div>
          </div>
          <div class='player-info-group'>
            <div id='player-number-${index}'></div>
            <div class='books-list' id='player-books-${index}'></div>
            <div>
              ${(button && this.index !== 0 && playerTurn) ? `<button class='player-button' id='player-button-${index}'>Ask</button>` : ''}
            </div>
          </div>
      </div>
      `
    )
  }

  initialElement() { return document.getElementById(`player-initial-${this.index}`) }

  nameElement() { return document.getElementById(`player-name-${this.index}`) }

  booksElement() { return document.getElementById(`player-books-${this.index}`) }

  askButtonElement() { return document.getElementById(`player-button-${this.index}`) }

  cardNumberElement() { return document.getElementById(`player-number-${this.index}`) }

  callAsk() {
    this.ask({ givingPlayerIndex: this.index })
  }

  handleOnClick() {
    const element = this.askButtonElement()
    if (element) { element.onclick = this.callAsk.bind(this) }
  }

  drawBooks() {
    this.player._books.forEach((book) => {
      const div = document.createElement('div')
      div.innerHTML = `<div class='book'>${book[0].rank()}</div>`
      this.booksElement().appendChild(div)
    })
  }

  populatePlayerView() {
    this.initialElement().textContent = this.player.name.split('')[0]
    this.nameElement().textContent = (
      `${this.player.name}`
    )
    this.cardNumberElement().textContent = `${this.player.hand().length} card${this.player.hand().length === 1 ? '' : 's'}`
    this.drawBooks()
    this.handleOnClick()
  }

  draw(container) {
    const element = this.render({ container, clear: false, className: 'player-row' })
    this.populatePlayerView()
    return element
  }
}
