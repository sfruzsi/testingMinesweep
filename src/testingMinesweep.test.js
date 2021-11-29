const { MineSweeper } = require('./testingMinesweep');

describe('Testing the Mine Sweeper', () => {
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
    beforeEach(() => {
      global.Math.random = () => 0.5;
      game.addMines();
    });
    it('Given a board with mine on [1,1] When I click on [1,1] Then I get Game Over', () => {
      expect(game.clickCell(1, 1)).toBe('Game Over');
    });

    it('Given a board with mine on [1,1] When I click on [0,0] Then I get Cleared cell', () => {
      expect(game.clickCell(0, 0)).toBe('Cleared cell');
    });

    it('Given a board with mine on [1,1] When I click on [1,1] Then X will appear on [1,1]', () => {
      game.clickCell(1, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given a board with mine on [1,1] When I click on [0,0] Then 1 will appear on [0,0]', () => {
      game.clickCell(0, 0);
      expect(game.board).toBe(
        '+-+-+-+\n|1| | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given a board with mine on [1,1] When I click on [0,1] Then 1 will appear on [0,1]', () => {
      game.clickCell(0, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| |1| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given a board with mine on [0,0] and [1,1] When I click on [0,1] Then 2 will appear on [0,1]', () => {
      global.Math.random = () => 0;
      game.addMines();
      game.clickCell(0, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| |2| |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });
  });

  describe('Second move', () => {
    it('Given a board with mine on [1,1] When I click on [0,1] and [1,1] Then Game Over', () => {
      global.Math.random = () => 0.5;
      game.addMines();
      game.clickCell(0, 1);
      game.clickCell(1, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| |1| |\n+-+-+-+\n| |X| |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given a board with mine on [1,1] When I click on [0,1] and [1,1] Then Game Over', () => {
      global.Math.random = () => 0.5;
      game.addMines();
      game.clickCell(0, 1);
      game.clickCell(1, 0);
      expect(game.board).toBe(
        '+-+-+-+\n| |1| |\n+-+-+-+\n|1| | |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });
  });

  describe('Flag cells', () => {
    it('Given a board When I flag [1,1] Then returns cell flagged as bomb', () => {
      game.addMines();
      expect(game.flagCell(1, 1)).toBe('Cell flagged as bomb');
    });

    it('Given a board When I flag [1,1] Then * appears in [1,1]', () => {
      game.addMines();
      game.flagCell(1, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| | | |\n+-+-+-+\n| |*| |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });

    it('Given a board When I flag [1,1] Then * appears in [1,1]', () => {
      global.Math.random = () => 0.5;
      game.addMines();
      game.clickCell(0, 1);
      game.flagCell(1, 1);
      expect(game.board).toBe(
        '+-+-+-+\n| |1| |\n+-+-+-+\n| |*| |\n+-+-+-+\n| | | |\n+-+-+-+'
      );
    });
  });
});
