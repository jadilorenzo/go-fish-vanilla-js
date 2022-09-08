class HandView extends View {
  constructor({ cards }) {
    super()
    this._cards = cards
    this.markup = (
      `
        <div class='group'>
            <div class='hand-label'>Hand:</div>
            <div class='${cards.length > 0 ? 'cards' : ''}' id='cards'></div>
        </div>
      `
    )
  }

  cardsElement() { return document.getElementById('cards') }

  drawCards({ element }) {
    if (this._cards.length > 0) {
      this._cards.forEach((card, index) => {
        new CardView({ card, index }).draw(element)
      })
    } else {
      this.cardsElement().innerHTML = '<div class=\'no-cards-label\'>no cards</div>'
    }
  }

  populateHand() {
    this.drawCards({ element: this.cardsElement() })
  }

  draw(container) {
    const element = this.render({ container })
    this.populateHand()
    return element
  }
}
