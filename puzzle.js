class Puzzle {
  constructor() {
    const row = [0,0,0,0,0,0,0,0,0];
    this.puzzle = [row, row, row, row, row, row, row, row, row];
  }

  get rows() {
    return this.puzzle;
  }
}

module.exports = Puzzle;
