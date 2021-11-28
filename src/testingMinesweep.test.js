const { createBoard } = require('./testingMinesweep');

describe('Board creation', () => {
  it('Given the board is 3x3 When I start the game Then should return 3x3 empty board', () => {
    expect(createBoard()).toBe(
      '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
    );
  });
});
