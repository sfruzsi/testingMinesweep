class MineSweeper {
  board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';

  matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  createBoard = () => this.board;

  addMines = () => {
    const mineNumber = Math.floor(Math.random() * 8) + 1;
    for (let i = 0; i < mineNumber; i++) {
      const posX = Math.floor(Math.random() * 3);
      const posY = Math.floor(Math.random() * 3);
      this.matrix[posX][posY] = 'X';
    }
    return this.matrix;
  };

  clickCell = (x, y) => {
    if (this.matrix[x][y] !== 'X') {
      const index = this.board.split(' ', 3 * x + y + 1).join(' ').length;
      this.board = `${this.board.substr(0, index)}1${this.board.substr(
        index + 1
      )}`;
      return 'Cleared cell';
    }
    const index = this.board.split(' ', 3 * x + y + 1).join(' ').length;
    this.board = `${this.board.substr(0, index)}X${this.board.substr(
      index + 1
    )}`;
    return 'Game Over';
  };
}

module.exports = {
  MineSweeper
};
