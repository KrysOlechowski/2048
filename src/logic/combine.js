export default function combine(newBoard) {
  let copyBoard = [...newBoard];

  for (let i = 0; i < 4; i++) {
    for (let j = 3; j > 0; j--) {
      if (copyBoard[i][j] === copyBoard[i][j - 1] && copyBoard[i][j] !== 0) {
        copyBoard[i][j] = copyBoard[i][j] + copyBoard[i][j - 1];
        copyBoard[i][j - 1] = 0;
      }
    }
  }

  return copyBoard;
}
