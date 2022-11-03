class Team {
  constructor(enemyChar) {
    this.enemyChar = enemyChar;
  }

  * [Symbol.iterator]() {
    for (const enemy of this.enemyChar) {
      yield enemy;
    }
  }
}
