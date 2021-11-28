const { MineSweeper } = require('./testingMinesweep');

describe('Board creation', () => {
  it('Given the board is 3x3 When I start the game Then should return 3x3 empty board', () => {
    const game = new MineSweeper();
    expect(game.createBoard()).toBe(
      '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
    );
  });

  it('Given the board is 3x3 When I start the game Then there is 1 mine on [0,0] the board', () => {
    global.Math.random = () => 0;
    const game = new MineSweeper();
    expect(game.addMines()).toStrictEqual([
      ['X', '', ''],
      ['', '', ''],
      ['', '', '']
    ]);
  });

  it('Given the board is 3x3 When I start the game Then there is 1 random mine', () => {
    global.Math.random = () => 0.5;
    const game = new MineSweeper();
    expect(game.addMines()).toStrictEqual([
      ['', '', ''],
      ['', 'X', ''],
      ['', '', '']
    ]);
  });

  it('Given the board is 3x3 When I start the game Then there is random number of random mines', () => {
    global.Math.random = () => 0.5;
    const game = new MineSweeper();
    expect(game.addMines()).toStrictEqual([
      ['', '', ''],
      ['', 'X', ''],
      ['', '', '']
    ]);
  });

  it('Given the board is 3x3 When I start the game Then the numbers next to the mines are there', () => {
    global.Math.random = () => 0.5;
    const game = new MineSweeper();
    expect(game.addNumbers()).toStrictEqual([
      ['1', '1', '1'],
      ['1', 'X', '1'],
      ['1', '1', '1']
    ]);
  });
});
