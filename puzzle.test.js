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

 const incompletePuzzle = new Puzzle([
                                    [0, 0, 0, 1, 0, 0, 7, 0, 2],
                                    [0, 3, 7, 9, 5, 0, 0, 0, 0],
                                    [0, 0, 1, 0, 0, 2, 0, 0, 3],
                                    [5, 9, 0, 0, 0, 0, 3, 0, 1],
                                    [0, 2, 0, 0, 0, 0, 0, 7, 0],
                                    [7, 0, 3, 0, 0, 0, 0, 9, 8],
                                    [8, 0, 0, 2, 0, 0, 1, 0, 0],
                                    [0, 0, 0, 0, 8, 5, 0, 6, 0],
                                    [6, 0, 5, 0, 0, 9, 0, 0, 0]
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
    it('should have nine numbers', () => {
      expect(completedPuzzle.columns[3]).toHaveLength(9);
    });

    it('should transpose a row', () => {
      expect(completedPuzzle.columns[0]).toStrictEqual([4, 1, 6, 2, 3, 7, 9, 5, 8]);
      expect(completedPuzzle.columns[2]).toStrictEqual([7, 8, 3, 9, 1, 5, 6, 2, 4]);
      expect(completedPuzzle.columns[8]).toStrictEqual([6, 2, 9, 3, 4, 1, 5, 8, 7]);
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

describe('isPuzzleComplete()', () => {
  it('should return true when 1-9 is in every row, column and house', () => {
    expect(completedPuzzle.isPuzzleComplete()).toBe(true);
  });

  it('should return false when 1-9 is not in every row, column and house', () => {
    expect(incompletePuzzle.isPuzzleComplete()).toBe(false);
  });
});

// Test private functions
describe('hasAllNineNumbers()', () => {
  const puzzle = new Puzzle();

  it('should return true when each number from 1-9 exists in the array', () => {
    const array = [2, 1, 3, 5, 4, 7, 6, 8, 9];
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

describe('frequencyOfValues()', () => {
  const puzzle = new Puzzle();
  const input1 = [-3, 0, 'salsa', true];
  const expected1 = {'-3': 1, 0: 1, salsa: 1, true: 1};
  const input2 = ['dog', 'cat', 4, 'cat', 'dog', 4, 2, 4];
  const expected2 = { dog: 2, cat: 2, 4: 3, 2: 1};

  it('should return an empty object if there is no input', () => {
    expect(puzzle.frequencyOfValues()).toMatchObject({});
  });

  it('should return a key for every unique element', () => {
    expect(puzzle.frequencyOfValues(input1)).toHaveProperty('-3');
    expect(puzzle.frequencyOfValues(input1)).toHaveProperty('0');
    expect(puzzle.frequencyOfValues(input1)).toHaveProperty('salsa');
    expect(puzzle.frequencyOfValues(input1)).toHaveProperty('true');
  });

  it('should return the number of times the element occurs as the value', () => {
    expect(puzzle.frequencyOfValues(input2)).toHaveProperty('dog', 2);
    expect(puzzle.frequencyOfValues(input2)).toHaveProperty('cat', 2);
    expect(puzzle.frequencyOfValues(input2)).toHaveProperty('4', 3);
    expect(puzzle.frequencyOfValues(input2)).toHaveProperty('2', 1);
  });

  it('should return an object', () => {
    expect(puzzle.frequencyOfValues(input1)).toMatchObject(expected1);
    expect(puzzle.frequencyOfValues(input2)).toMatchObject(expected2);
  });
});

describe('hasValidNumbers()', () => {
  let puzzle = new Puzzle();

  it('should have nine elements in the array', () => {
    const input1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const input2 = [2, 4];
    const input3 = [5, 9, 0, 0, 0, 0, 3, 0, 1, 0];

    expect(puzzle.hasValidNumbers(input1)).toBe(true);
    expect(puzzle.hasValidNumbers(input2)).toBe(false);
    expect(puzzle.hasValidNumbers(input3)).toBe(false);
  });

  it('should return true when numbers 1-9 all appear once', () => {
    const input = [3, 8, 1, 9, 2, 7, 6, 5, 4];
    expect(puzzle.hasValidNumbers(input)).toBe(true);
  });

  it('should return true when numbers 1-9 occur at most once', () => {
    const input1 = [8, 0, 0, 2, 0, 0, 1, 0, 0];
    const input2 = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    expect(puzzle.hasValidNumbers(input1)).toBe(true);
    expect(puzzle.hasValidNumbers(input2)).toBe(true);
  });

  it('should return false when numbers 1-9 occur more than once', () => {
    const input = [7, 6, 5, 4, 7, 8, 9, 2, 1];
    expect(puzzle.hasValidNumbers(input)).toBe(false);
  });

  it('should return false when an invalid element is present', () => {
    const input1 = [7, 6, 5, 4, 3, 18, 9, 2, 1];  // invalid 18
    const input2 = [7, 6, 5, 4, 3, 8, 9, -2, 1];  // invalid -2
    const input3 = [7, 6, 5, 4, 3, 8, 'cake', 2, 1];  // invalid 'cake'
    const input4 = [7, 6, 5, 4, 3, 8.1, 9, 2, 1];  // invalid 8.1

    expect(puzzle.hasValidNumbers(input1)).toBe(false);
    expect(puzzle.hasValidNumbers(input2)).toBe(false);
    expect(puzzle.hasValidNumbers(input3)).toBe(false);
    expect(puzzle.hasValidNumbers(input4)).toBe(false);
  })
});
