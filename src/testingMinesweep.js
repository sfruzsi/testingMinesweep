const createBoard = () => {
  const board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
  return board;
};

const addMines = () => {
  const matrix = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  const mineNumber = Math.floor(Math.random() * 8) + 1;
  for (let i = 0; i < mineNumber; i++) {
    const posX = Math.floor(Math.random() * 3);
    const posY = Math.floor(Math.random() * 3);
    matrix[posX][posY] = 'X';
  }
  return matrix;
};

const addNumbers = () => [
  ['1', '1', '1'],
  ['1', 'X', '1'],
  ['1', '1', '1']
];

module.exports = {
  createBoard,
  addMines,
  addNumbers
};
