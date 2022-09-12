class StatView extends View {
  constructor({ stat, detail }) {
    super()
    this.markup = (
      `
        <div>
          <b id='stat'>${stat}:</b>
          <span id='detail'>${detail}</span>
        </div>
      `
    )
  }

  draw(container) {
    const element = this.render({ container, clear: false })
    element.scrollIntoView()
    return element
  }
}
