class HandView extends View {
  constructor({ cards }) {
    super()
    this.markup = (
      `
        <div class='group'>
            Hand:
            <div id='cardsd'></div>
        </div>
      `
    )
  }

  draw(container) {
    const element = this.render({ container })
    return element
  }
}
