class Puzzle {
  constructor(input) {
    if (input === undefined) {
      const row = [0,0,0,0,0,0,0,0,0];
      this.puzzle = [row, row, row, row, row, row, row, row, row];  
    } else {
      this.puzzle = input;
    }
  }

  get rows() {
    return this.puzzle;
  }

  get columns() {
    return this.puzzle;
  }
}

module.exports = Puzzle;

const puzzle = new Puzzle([4,3]);
console.log(puzzle.rows);