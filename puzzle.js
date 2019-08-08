class Puzzle {
  constructor(input) {
    if (input === undefined) {
      const row = [0, 0, 0, 0, 0, 0, 0, 0, 0];
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
    return this.rows[0].map((_, i) => this.rows.map(row => row[i]));
  }

  get houses() {
    let houses = [[], [], [], [], [], [], [], [], []];

    for(let iHouse = 0; iHouse < 9; iHouse +=1) {
      // Set up the rows
      // - Houses 0, 1, 2 take the first three rows
      // - Houses 3, 4, 5 take the middle three rows
      // - Houses 6, 7, 8 take the last three rows
      const iRowMin = Math.floor(iHouse / 3) * 3;
      const iRowMax = iRowMin + 3;
      let iRow = iRowMin;

      // Set up the numbers to copy in each row
      // - Houses 0, 3, 6 take the first three numbers of the row
      // - Houses 1, 4, 7 take the middle three numbers of the row
      // - Houses 2, 5, 8 take the last three numbers of the row
      let iNumMin;
      switch (iHouse) {
        case 0:
        case 3:
        case 6:
          iNumMin = 0;
          break;
        case 1:
        case 4:
        case 7:
          iNumMin = 3;
          break;
        case 2:
        case 5:
        case 8:
          iNumMin = 6;
          break;
        default:
          throw new Error('Unexpected number of houses');
      }
      const iNumMax = iNumMin + 3;
      let iNum = iNumMin;

      // Select the correct row
      while (iRow < iRowMax) {
        // Select the correct numbers from the row
        while (iNum < iNumMax) {
          const newNumber = this.rows[iRow][iNum];
          houses[iHouse].push(newNumber);
          iNum += 1;
        }
        iNum = iNumMin;
        iRow += 1;
      }
    }

    return houses;
  }

  hasAllNineNumbers(array) {
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    array.sort((a, b) => a - b);

    return JSON.stringify(array) == JSON.stringify(expectedOutput);
  }
}

module.exports = Puzzle;
