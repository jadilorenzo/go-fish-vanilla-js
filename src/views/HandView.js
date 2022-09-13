class HandView extends View {
  constructor({ cards, selectRank }) {
    super()
    this._cards = cards
    this._selectedCards = []
    this._selectGameRank = selectRank
    this.rankValues = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    this.markup = (
      `
        <div class='group'>
            <div class='hand-label'>Your Hand:</div>
            <div class='card-groups'>
              <div class='cards' id='cards'></div>
              <div class='flex-grow'></div>
              <div class='cards-selected' id='cards-selected'></div>
            </div>
        </div>
      `
    )
  }

  cardsElement() { return document.getElementById('cards') }

  cardsSelectedElement() { return document.getElementById('cards-selected') }

  selectRank({ rank }) {
    this._selectGameRank({ rank })
    this._selectedCards = this._cards.filter((card) => card.rank() === rank)
    this.cardsSelectedElement().innerHTML = ''
    this.drawCards({
      cards: this._selectedCards,
      element: this.cardsSelectedElement(),
      still: true,
    })
  }

  drawCards({ cards, element, still }) {
    cards.sort((card1, card2) => (
      this.rankValues.indexOf(card1.rank()) - this.rankValues.indexOf(card2.rank())
    )).forEach((card, index) => {
      new CardView({
        card,
        index,
        selectRank: ({ rank }) => this.selectRank({ rank }),
        still,
      }).draw(element)
    })
  }

  populateHand() {
    this.drawCards({ cards: this._cards, element: this.cardsElement() })
    this.drawCards({
      cards: this._selectedCards,
      element: this.cardsSelectedElement(),
      still: true,
    })
  }

  draw(container) {
    const element = this.render({ container })
    this.populateHand()
    return element
  }
}
