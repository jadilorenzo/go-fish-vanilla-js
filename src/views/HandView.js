class HandView extends View {
  constructor({ cards }) {
    super()
    this._cards = cards
    this.markup = (
      `
        <div class='group'>
            <div class='hand-label'>Your Hand:</div>
            <div class='${cards.length > 0 ? 'cards' : ''}' id='cards'></div>
        </div>
      `
    )
    this.selectedRank = ''
  }

  cardsElement() { return document.getElementById('cards') }

  drawCards({ element }) {
    this._cards.forEach((card, index) => {
      new CardView({
        card,
        index,
        selectRank: ({ rank }) => {
          console.log(rank)
          this.selectedRank = rank
        },
      }).draw(element)
    })
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
