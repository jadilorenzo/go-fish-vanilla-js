class View {
  markup = ''

  // appends to container and return element to be modified
  render({ className, container, clear = true }) {
    if (clear) container.innerHTML = ''
    const element = document.createElement('div')
    if (className) element.className = className
    element.innerHTML = this.markup
    container.appendChild(element)
    return element
  }
}
