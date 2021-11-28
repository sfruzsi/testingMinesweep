const createBoard = () => {
  const board = '+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+\n| | | |\n+-+-+-+';
  console.log(board);
  return board;
};

const addMines = () => {
  const matrix = [
    ['X', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  return matrix;
};
module.exports = {
  createBoard,
  addMines
};
