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
      this.matrix[posX][posY] = 'X';
    }
    return this.matrix;
  };

  clickCell = (x, y) => {
    if (this.matrix[x][y] !== 'X') {
      const position = this.sBoard.split(' ', 3 * x + y + 1).join(' ').length;
      let mineCount = 0;
      for (let i = Math.max(x - 1, 0); i <= Math.min(x + 1, 2); i++) {
        for (let j = Math.max(y - 1, 0); j <= Math.min(y + 1, 2); j++) {
          if (this.matrix[i][j] === 'X') {
            mineCount++;
          }
        }
      }
      this.board = `${this.board.substr(
        0,
        position
      )}${mineCount}${this.board.substr(position + 1)}`;
      return 'Cleared cell';
    }
    const position = this.sBoard.split(' ', 3 * x + y + 1).join(' ').length;
    this.board = `${this.board.substr(0, position)}X${this.board.substr(
      position + 1
    )}`;
    return 'Game Over';
  };

  flagCell = () => {
    this.board = '+-+-+-+\n| | | |\n+-+-+-+\n| |*| |\n+-+-+-+\n| | | |\n+-+-+-+';
    return 'Cell flagged as bomb';
  };
}

module.exports = {
  MineSweeper
};
