class Bot extends Player {
  constructor(name = '') {
    super(name === '' ? 'Billy Bob' : name)
    this.bot = true
  }
}
