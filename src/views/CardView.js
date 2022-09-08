class CardView extends View {
  constructor({ card, index }) {
    super()
    this.markup = (
      `
        <div class='card ${index === 0 ? 'first-card' : 'other-card'}'>
          <img class='card-img' src='images/${card.suit()}_${card.rank()}.svg'>
        </div>
      `
    )
  }

  draw(container) {
    const element = this.render({ container, clear: false })
    return element
  }
}
