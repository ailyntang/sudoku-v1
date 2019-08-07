const Puzzle = require('./puzzle');

describe('an empty puzzle', () => {
  let puzzle = new Puzzle();

  it('should have nine rows', () => {
    expect(puzzle.rows).toHaveLength(9);
  });

  it('should have nine columns', () => {
    expect(puzzle.columns).toHaveLength(9);
  });

  it('should have zeros for every number', () => {
    puzzle.rows.forEach((row) => {
      row.forEach((num) => {
        expect(num).toBe(0);
      });
    });
  });
});

describe('a row or column', () => {
  const puzzle = new Puzzle;
  const row = puzzle.rows[0];
  const col = puzzle.columns[0];

  it('should have nine numbers', () => {
    expect(row).toHaveLength(9);
    expect(col).toHaveLength(9);
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

describe('a number', () => {
  const puzzle = new Puzzle;

  it('should be an integer between 0 and 9 inclusive', () => {
    const validNumbers = [0,1,2,3,4,5,6,7,8,9];    

    puzzle.rows.forEach((row) => {
      row.forEach((num) => {
        expect(validNumbers).toContain(num);
      });
    });
  });
});
