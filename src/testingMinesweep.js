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

  clickCell = () => 'Game Over';
}

module.exports = {
  MineSweeper
};
