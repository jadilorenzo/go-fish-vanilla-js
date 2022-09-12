class PlayerOverView extends View {
  constructor({
    player,
    index,
  }) {
    super()
    this.index = index
    this.player = player
    this.rankValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    this.markup = (
      `
      <div class='player'>
          <div class='player-name-group'>
            <div class='player-initial-circle'>
              <span class='player-initial' id='player-initial-${index}'></span>
            </div>
            <div class='player-name' id='player-name-${index}'></div>
          </div>
          <div class='player-info-group'>
            <div id='player-number-${index}'></div>
            <div class='books-list' id='player-books-${index}'></div>
          </div>
      </div>
      `
    )
  }

  initialElement() { return document.getElementById(`player-initial-${this.index}`) }

  nameElement() { return document.getElementById(`player-name-${this.index}`) }

  booksElement() { return document.getElementById(`player-books-${this.index}`) }

  cardNumberElement() { return document.getElementById(`player-number-${this.index}`) }

  drawBooks() {
    this.player._books.sort((book1, book2) => (
      this.rankValues.indexOf(book1[0].rank()) - this.rankValues.indexOf(book2[0].rank())
    )).forEach((book) => {
      const div = document.createElement('div')
      div.innerHTML = `<div class='book'>${book[0].rank()}</div>`
      this.booksElement().appendChild(div)
    })
  }

  populatePlayerView() {
    this.initialElement().textContent = this.index + 1
    this.nameElement().textContent = (
      `${this.player.name} ${this.index === 0 ? '(you)' : ''}`
    )
    this.cardNumberElement().textContent = `${this.player.hand().length} card${this.player.hand().length === 1 ? '' : 's'}`
    this.drawBooks()
  }

  draw(container) {
    const element = this.render({ container, clear: false, className: 'player-row-full' })
    this.populatePlayerView()
    return element
  }
}
