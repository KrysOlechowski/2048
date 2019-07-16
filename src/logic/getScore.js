export default function getScore(newScore, newBoard) {
  let score = 0;
  const copyBoard = [...newBoard];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      score = score + copyBoard[i][j];
    }
  }
  console.log(score);
  return score;
}
