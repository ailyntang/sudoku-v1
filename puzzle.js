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

  /**
   * Takes an array of rows (e.g. [[1, 2], [3, 4]])
   * Returns an array of columns (e.g. [[1, 3], [2, 4]])
  */
  get columns() {
    // First `map` cycles through the number of columns as an index `i`.
    // Second `map` cycles picks out the correct number in each row to insert into the column.
    return this.puzzle[0].map((_, i) => this.puzzle.map(row => row[i]));
  }
}

module.exports = Puzzle;
