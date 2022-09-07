class GameView {
  constructor(game) {
    this.game = game
  }

  markup = (
    `
    <div>
        Go FIIISH
    </div>
   `
  )

  draw(container) {
    container.innerHTML = ''
    const element = document.createElement('div')
    element.innerHTML = this.markup
    container.appendChild(element)
    return element
  }
}
