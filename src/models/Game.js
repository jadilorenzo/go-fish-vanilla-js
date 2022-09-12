const random = (max, min) => Math.floor(Math.random() * (max - min) + min)

class Game {
  constructor(players = [new Player('Player 1'), new Bot()]) {
    this._players = players
    this._deck = new Deck()
    this._playerIndex = 0
  }

  players() {
    return this._players
  }

  deck() {
    return this._deck
  }

  _lastPlayer() {
    const player = (this._playerIndex !== 0)
      ? this._players[this._playerIndex - 1]
      : this._players[this._players.length - 1]
    return player
  }

  currentPlayer() {
    return this._players[this._playerIndex]
  }

  goFish({ rank = '' } = {}) {
    const topCard = this._deck.draw()
    this._players[this._playerIndex].take({ cards: topCard ? [topCard] : [] })
    return topCard?.rank() === rank
  }

  _nextTurn() {
    this._playerIndex = (this._playerIndex === this._players.length - 1)
      ? 0
      : this._playerIndex + 1
  }

  deal() {
    for (let index = 0; index < this._players.length * 7; index++) {
      this.goFish({})
      this._nextTurn()
    }
    this._playerIndex = 0
  }

  start() {
    this._deck.shuffle()
    this.deal()
  }

  _askFor({ givingPlayerIndex, rank }) {
    const cards = this._players[givingPlayerIndex].give({ rank })
    this._players[this._playerIndex].take({ cards })
    return cards
  }

  _generateOtherPlayerIndex({ index }) {
    let number = random(0, this._players.length - 1)
    if (number === index) {
      number = this._generateOtherPlayerIndex({ index })
    }
    return number
  }

  playRound({
    givingPlayerIndex,
    rank,
    addStat,
  }) {
    this.takeTurn({ givingPlayerIndex, rank, addStat })
    if (this.currentPlayer().bot) {
      this.playRound({ addStat })
    }
  }

  _generateRandomRankFromHand() {
    if (
      this.currentPlayer()
      && this.currentPlayer()?.hand().length > 0
    ) {
      return this.currentPlayer()
        .hand()[random(0, this.currentPlayer().hand().length - 1)].rank()
    }
    return undefined
  }

  gameOver() {
    const noCardsInHands = this._players
      .filter((player) => player.hand().length <= 0)
      .length > this.players().length - 1
    const emptyDeck = this.deck().length === 0
    console.log({ res: noCardsInHands && emptyDeck, players: this.players() })
    return noCardsInHands && emptyDeck
  }

  takeTurn({
    givingPlayerIndex = this._generateOtherPlayerIndex(this._playerIndex),
    rank = this._generateRandomRankFromHand(),
    addStat = () => {},
  }) {
    if (this._askFor({ givingPlayerIndex, rank }).length === 0) {
      addStat({
        stat: `${this.currentPlayer().name}`,
        detail: ` asked for cards of rank ${rank}`,
      })
      if (!this.goFish({ rank })) {
        addStat({
          stat: `${this.currentPlayer().name}`,
          detail: ' drew a card.',
        })
        this._nextTurn()
      } else {
        addStat({
          stat: `${this.currentPlayer().name}`,
          detail: ` drew a card of rank ${rank}`,
        })
      }
    } else {
      addStat({
        stat: `${this.currentPlayer().name}`,
        detail: ` recieved cards with rank ${rank} from ${this.players()[givingPlayerIndex].name}`,
      })
    }
  }
}
