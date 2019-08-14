export default function checkIfMoved(newBoard, oldBoard) {
  const copyBoard = [...newBoard];
  const oldCopyBoard = [...oldBoard];
  let moved = false;
  // console.table(copyBoard);
  // console.table(oldCopyBoard);

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (copyBoard[i][j] !== oldCopyBoard[i][j]) {
        console.log(copyBoard[i][j]);
        console.log(oldBoard[i][j]);

        moved = true;
        return moved;
      }
    }
  }
  // console.log(moved);
  return moved;
}
