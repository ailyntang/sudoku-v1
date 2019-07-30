const Puzzle = require('./puzzle');

describe('an empty puzzle', () => {
  let puzzle = new Puzzle;

  it('should have nine rows', () => {
    expect(puzzle.rows.length).toBe(9);
  });
});
