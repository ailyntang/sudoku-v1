const Puzzle = require('./puzzle');

const validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


describe('the puzzle elements', () => {

  // Do I want this to be immutable or mutable?
  describe('a row, column and house', () => {
    const puzzle = new Puzzle;
    const row = puzzle.rows[0];
    const col = puzzle.columns[0];
    const house = puzzle.houses[0];

    it('should have nine numbers', () => {
      expect(row).toHaveLength(9);
      expect(col).toHaveLength(9);
      expect(house).toHaveLength(9);
    });
  });

  describe('a column', () => {
    const row = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const puzzle = new Puzzle([row, row, row, row, row, row, row, row, row]);
    const col1 = [1, 1, 1, 1, 1, 1, 1, 1, 1];
    const col5 = [5, 5, 5, 5, 5, 5, 5, 5, 5];

    it('should transpose a row', () => {
      expect(puzzle.columns[1]).toStrictEqual(col1);
      expect(puzzle.columns[5]).toStrictEqual(col5);
    });
  });

  describe('the houses', () => {
    it('should have nine numbers', () => {
      expect(completedPuzzle.houses[4]).toHaveLength(9);
    });

    describe('house 1', () => {
      it('should contain the first three numbers of the first three rows', () => {
        const expected = [4, 5, 7, 1, 9, 8, 6, 2, 3];
        expect(completedPuzzle.houses[0]).toStrictEqual(expected);
      });
    });

    describe('house 2', () => {
      it('should contain the middle three numbers of the first three rows', () => {

      });
    });

    describe('house 3', () => {
      it('should contain the last three numbers of the first three rows', () => {

      });
    });

    describe('house 4', () => {
      it('should contain the first three numbers of the middle three rows', () => {

      });
    });

    describe('house 5', () => {
      it('should contain the middle three numbers of the middle three rows', () => {

      });
    });

    describe('house 6', () => {
      it('should contain the last three numbers of the middle three rows', () => {

      });
    });

    describe('house 7', () => {
      it('should contain the first three numbers of the last three rows', () => {

      });
    });

    describe('house 8', () => {
      it('should contain the middle three numbers of the last three rows', () => {

      });
    });

    describe('house 9', () => {
      it('should contain the last three numbers of the last three rows', () => {

      });
    });
  });

  describe('a number', () => {
    const puzzle = new Puzzle;

    it('should be an integer between 0 and 9 inclusive', () => {
      puzzle.rows.forEach((row) => {
        row.forEach((num) => {
          expect(validNumbers).toContain(num);
        });
      });
    });
  });
});

describe('a puzzle', () => {
  let puzzle = new Puzzle();

  it('should have nine rows', () => {
    expect(puzzle.rows).toHaveLength(9);
  });

  it('should have nine columns', () => {
    expect(puzzle.columns).toHaveLength(9);
  });

  describe('an incomplete puzzle', () => {
    it('can have multiple zeros', () => {

    });
  });

  describe('an empty puzzle', () => {
    it('should have zeros for every number', () => {
      puzzle.rows.forEach((row) => {
        row.forEach((num) => {
          expect(num).toBe(0);
        });
      });
    });
  });
});

xdescribe('isPuzzleValid()', () => {
  let puzzle = new Puzzle();

  it('should return true or false', () => {

  });

  it('should have one number from 1-9 in each row', () => {
    puzzle.rows.forEach((row) => {
      expect(hasAllNineNumbers(row)).toBe(true);
    });
  });

  it('should have one number from 1-9 in each column', () => {
    puzzle.columns.forEach((column) => {
      expect(hasAllNineNumbers(column)).toBe(true);
    });
  });

  it('should have one number from 1-9 in each house', () => {

  });

});

describe('hasAllNineNumbers()', () => {
  const puzzle = new Puzzle();

  it('should return true when each number from 1-9 exists in the array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(puzzle.hasAllNineNumbers(array)).toBe(true);
  });

  it('should return false when a number that is not 1-9 is present', () => {
    const array = [11, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(puzzle.hasAllNineNumbers(array)).toBe(false);
  });

  it('should return false when a number occurs more than once', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 7, 8];
    expect(puzzle.hasAllNineNumbers(array)).toBe(false);
  });
});
