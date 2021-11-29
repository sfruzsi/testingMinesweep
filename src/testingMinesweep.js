const BOMB = 'X';
const FLAG = '*';
const BLANK = '_';

class MineSweeper {
  board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';

  sBoard = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';

  matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  createBoard = () => this.sBoard;

  addMines = () => {
    const mineNumber = Math.floor(Math.random() * 8) + 1;
    for (let i = 0; i < mineNumber; i++) {
      const posX = Math.floor(Math.random() * 3);
      const posY = Math.floor(Math.random() * 3);
      this.matrix[posX][posY] = BOMB;
    }
    return this.matrix;
  };

  clickCell = (x, y) => {
    if (this.matrix[x][y] !== BOMB) {
      let mineCount = 0;
      for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, 2); i++) {
        for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, 2); j++) {
          if (this.matrix[i][j] === BOMB) {
            mineCount++;
          }
        }
      }
      if (mineCount > 0) {
        this.revealCell(x, y, mineCount);
      } else {
        this.revealCell(x, y, BLANK);
        this.revealOnZero(x, y);
      }
      return 'Cleared cell';
    }
    this.revealCell(x, y, BOMB);
    return 'Game Over';
  };

  flagCell = (x, y) => {
    this.revealCell(x, y, FLAG);
    return 'Cell flagged as bomb';
  };

  revealCell = (x, y, character) => {
    const position = this.sBoard.split(' ', 3 * x + y + 1).join(' ').length;
    this.board = `${this.board.substr(
      0,
      position
    )}${character}${this.board.substr(position + 1)}`;
  };

  revealOnZero = (x, y) => {
    for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, 2); i++) {
      for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, 2); j++) {
        const position = this.sBoard.split(' ', 3 * i + j + 1).join(' ').length;
        if (this.board[position] === ' ') {
          this.clickCell(i, j);
        }
      }
    }
  };
}

module.exports = {
  MineSweeper
};
