class View {
  markup = ''

  // appends to container and return element to be modified
  render({ container, clear = true }) {
    if (clear) container.innerHTML = ''
    const element = document.createElement('div')
    element.innerHTML = this.markup
    container.appendChild(element)
    return element
  }
}
