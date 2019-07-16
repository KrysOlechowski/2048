export default function slide(newBoard) {
  let copyBoard = [...newBoard];
  for (let i = 0; i < 4; i++) {
    let valueBoard = [];
    for (let j = 0; j < 4; j++) {
      if (copyBoard[i][j] > 0) {
        valueBoard.push(copyBoard[i][j]);
      }
    }
    let missing = 4 - valueBoard.length;
    let zerosArray = Array(missing).fill(0);
    copyBoard[i] = zerosArray.concat(valueBoard);
  }

  return copyBoard;
}
