export default function addRandom(newBoard) {
  let copyBoard = newBoard;
  let zerosArray = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (copyBoard[i][j] === 0) {
        zerosArray.push({
          x: i,
          y: j
        });
      }
    }
  }
  let options = zerosArray.length;
  let randomNum = Math.floor(Math.random() * options);
  let randomCell = zerosArray[randomNum];

  copyBoard[randomCell.x][randomCell.y] = Math.random() * 1 > 0.8 ? 4 : 2;

  return copyBoard;
}
