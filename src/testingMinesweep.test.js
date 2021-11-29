const { MineSweeper } = require('./testingMinesweep');

describe('Board creation', () => {
  let game;
  beforeEach(() => {
    game = new MineSweeper();
    return game;
  });
  describe('Board creation', () => {
    it('Given the board is 3x3 When I start the game Then should return 3x3 empty board', () => {
      console.log(game.createBoard());
      console.log('Game created');
      expect(game.createBoard()).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given the board is 3x3 When I start the game Then there is 1 mine on [0,0] the board', () => {
      global.Math.random = () => 0;
      expect(game.addMines()).toStrictEqual([
        ['X', '', ''],
        ['', '', ''],
        ['', '', '']
      ]);
    });

    it('Given the board is 3x3 When I start the game Then there is 1 random mine', () => {
      global.Math.random = () => 0.5;
      expect(game.addMines()).toStrictEqual([
        ['', '', ''],
        ['', 'X', ''],
        ['', '', '']
      ]);
    });

    it('Given the board is 3x3 When I start the game Then there is random number of random mines', () => {
      global.Math.random = () => 0.5;
      expect(game.addMines()).toStrictEqual([
        ['', '', ''],
        ['', 'X', ''],
        ['', '', '']
      ]);
    });
  });

  describe('Clicking on a bomb', () => {
    it('Given a board with mine on [1,1] When I click on [1,1] Then I get Game Over', () => {
      global.Math.random = () => 0.5;
      expect(game.clickCell(1, 1)).toBe('Game Over');
    });
  });
});
