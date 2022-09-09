class CardView extends View {
  constructor({ card, index, selectRank }) {
    super()
    this.index = index
    this.selectRank = selectRank
    this._card = card
    this.markup = (
      `
        <div id='card-${index}' class='card ${index === 0 ? 'first-card' : 'other-card'}'>
          <img class='card-img' src='images/${card.suit()}_${card.rank()}.svg'>
        </div>
      `
    )
  }

  card() {
    return this._card
  }

  cardElement() { return document.getElementById(`card-${this.index}`) }

  onClick(event) {
    event.preventDefault()
    this.selectRank({ rank: this.card().rank() })
  }

  handleClick({ element }) {
    element.onclick = this.onClick.bind(this)
  }

  populateCardView() {
    this.handleClick({ element: this.cardElement() })
  }

  draw(container) {
    const element = this.render({ container, clear: false })
    this.populateCardView()
    return element
  }
}
