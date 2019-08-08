const Puzzle = require('./puzzle');

const validNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const completedPuzzle = new Puzzle([
                                    [4, 5, 7, 2, 9, 3, 1, 8, 6],
                                    [1, 9, 8, 5, 6, 4, 7, 3, 2],
                                    [6, 2, 3, 7, 8, 1, 5, 4, 9],
                                    [2, 4, 9, 6, 1, 5, 8, 7, 3],
                                    [3, 8, 1, 9, 2, 7, 6, 5, 4],
                                    [7, 6, 5, 4, 3, 8, 9, 2, 1],
                                    [9, 3, 6, 8, 7, 2, 4, 1, 5],
                                    [5, 7, 2, 1, 4, 6, 3, 9, 8],
                                    [8, 1, 4, 3, 5, 9, 2, 6, 7]
                                    ]);

describe('the puzzle elements', () => {

  // Do I want this to be immutable or mutable?
  describe('a row', () => {
    it('should have nine numbers', () => {
      expect(completedPuzzle.rows[4]).toHaveLength(9);
    });

    it('should convert the puzzle input into rows', () => {
      expect(completedPuzzle.rows[0]).toStrictEqual([4, 5, 7, 2, 9, 3, 1, 8, 6]);
      expect(completedPuzzle.rows[5]).toStrictEqual([7, 6, 5, 4, 3, 8, 9, 2, 1]);
      expect(completedPuzzle.rows[7]).toStrictEqual([5, 7, 2, 1, 4, 6, 3, 9, 8]);
    });
  });

  describe('a column', () => {
    const row = [9, 1, 2, 3, 4, 5, 6, 7, 8];
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
        const expected = [2, 9, 3, 5, 6, 4, 7, 8, 1];
        expect(completedPuzzle.houses[1]).toStrictEqual(expected);
      });
    });

    describe('house 3', () => {
      it('should contain the last three numbers of the first three rows', () => {
        const expected = [1, 8, 6, 7, 3, 2, 5, 4, 9];
        expect(completedPuzzle.houses[2]).toStrictEqual(expected);
      });
    });

    describe('house 4', () => {
      it('should contain the first three numbers of the middle three rows', () => {
        const expected = [2, 4, 9, 3, 8, 1, 7, 6, 5];
        expect(completedPuzzle.houses[3]).toStrictEqual(expected);
      });
    });

    describe('house 5', () => {
      it('should contain the middle three numbers of the middle three rows', () => {
        const expected = [6, 1, 5, 9, 2, 7, 4, 3, 8];
        expect(completedPuzzle.houses[4]).toStrictEqual(expected);
      });
    });

    describe('house 6', () => {
      it('should contain the last three numbers of the middle three rows', () => {
        const expected = [8, 7, 3, 6, 5, 4, 9, 2, 1];
        expect(completedPuzzle.houses[5]).toStrictEqual(expected);
      });
    });

    describe('house 7', () => {
      it('should contain the first three numbers of the last three rows', () => {
        const expected = [9, 3, 6, 5, 7, 2, 8, 1, 4];
        expect(completedPuzzle.houses[6]).toStrictEqual(expected);
      });
    });

    describe('house 8', () => {
      it('should contain the middle three numbers of the last three rows', () => {
        const expected = [8, 7, 2, 1, 4, 6, 3, 5, 9];
        expect(completedPuzzle.houses[7]).toStrictEqual(expected);
      });
    });

    describe('house 9', () => {
      it('should contain the last three numbers of the last three rows', () => {
        const expected = [4, 1, 5, 3, 9, 8, 2, 6, 7];
        expect(completedPuzzle.houses[8]).toStrictEqual(expected);
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

  it('should have nine houses', () => {
    expect(puzzle.houses).toHaveLength(9);
  });

  describe('a completed puzzle', () => {
    it('should have 1-9 in every row', () => {

    });

    it('should have 1-9 in every column', () => {

    });

    it('should have 1-9 in every house', () => {

    });

  });

  describe('an incomplete puzzle', () => {
    it('should have multiple zeros', () => {

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
