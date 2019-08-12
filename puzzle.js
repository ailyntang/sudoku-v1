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
    return Array.from(this.puzzle);
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

  isPuzzleComplete() {
    for (let i = 0; i < 9; i += 1) {
      if (!this.hasAllNineNumbers(this.rows[i])) {
        return false;
      }
      if (!this.hasAllNineNumbers(this.columns[i])) {
        return false;
      }
      if (!this.hasAllNineNumbers(this.houses[i])) {
        return false;
      }
    }
    return true;
  }

  // Helper functions
  // These should be private

  hasAllNineNumbers(array) {
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let copy = Array.from(array);
    copy.sort((a, b) => a - b);

    return JSON.stringify(copy) === JSON.stringify(expectedOutput);
  }

  frequencyOfValues(array) {
    if (!array || array.length == 0) {
      return {};
    }

    let uniqueValues = [...new Set(array)];
    let copyOfInput = [...array];
    let count = 0;
    let output = {};

    // Cycle through the unique values in the array
    for (let i = 0; i < uniqueValues.length; i += 1) {
      const value = uniqueValues[i];
      let iValue =  copyOfInput.indexOf(value);

      // Look for the value in the remainder of the array until the value is no longer found
      while (iValue != -1) {
        count += 1;
        copyOfInput = copyOfInput.slice(iValue + 1);
        iValue = copyOfInput.indexOf(value);
      }
      output[value] = count;

      // Reset the count and array to start counting for the next unique value
      count = 0;
      copyOfInput = [...array];
    }

    return output;
  }

  /**
   * Tests if an input of nine numbers is valid for sudoku
   * The input can represent an empty, incomplete or complete row
   * Returns a boolean
  */
  hasValidNumbers(array) {
    if (array.length != 9) {
      return false;
    }

    let objFrequencies = this.frequencyOfValues(array);
    if (objFrequencies.hasOwnProperty('0')) {
      // Test for empty row
      if (objFrequencies['0'] === 9) {
        return true;
      }

      // Remove 0 as it is allowed to occur multiple times
      delete objFrequencies['0'];
    }

    // Ensure the non-zero values occur at most once in the array
    const arrayOfFrequencies = [...new Set(Object.values(objFrequencies))];
    if (arrayOfFrequencies.length != 1 || arrayOfFrequencies[0] != 1) {
      return false;
    }

    // Check the elements in the array are valid numbers
    const validNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrayOfValues = [...new Set(Object.keys(objFrequencies))];

    for (let i = 0; i < arrayOfValues.length; i += 1) {
      if (validNumbers.indexOf(Number(arrayOfValues[i])) == -1) {
        return false;
      }
    }

    return true;
  }

  isPuzzleValid() {
    for (let i = 0; i < 9; i += 1) {
      if (!this.hasValidNumbers(this.rows[i])) {
        return false;
      }
      if (!this.hasValidNumbers(this.columns[i])) {
        return false;
      }
      if (!this.hasValidNumbers(this.houses[i])) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Puzzle;
