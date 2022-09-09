class CardView extends View {
  constructor({
    card = new Card('H', 'A'),
    index = -1,
    selectRank = () => {},
    still = undefined,
  }) {
    super()
    this.index = index
    this.selectRank = selectRank
    this.still = still
    this._card = card
    this.markup = (
      `
        <div id='card-${index}' class='card ${(still === undefined) ? 'hover-card' : ''}'>
          <img class='card-img' src='images/${card.suit()}_${card.rank()}.svg'>
        </div>
      `
    )
  }

  card() {
    return this._card
  }

  cardElement(index = this.index) { return document.getElementById(`card-${index}`) }

  onClick(event) {
    event.preventDefault()
    this.selectRank({ rank: this.card().rank() })
  }

  handleClick({ element }) {
    element.onclick = this.onClick.bind(this)
  }

  populateCardView() {
    if (!this.still) this.handleClick({ element: this.cardElement() })
  }

  draw(container) {
    const element = this.render({ container, clear: false })
    this.populateCardView()
    return element
  }
}
