export default function rotateBoard(newBoard, btn) {
  let cb = [...newBoard];
  var w = cb.length;
  var h = cb.length;

  var i,
    j,
    t = [];
  if (btn === "right") {
    return cb;
  } else if (btn === "left") {
    console.log("YOU PRESSED LEFT BEFORE");
    for (let i = 0; i < 4; i++) {
      cb[i] = cb[i].reverse();
    }
    return cb;
  } else if (btn === "up") {
    console.log("YOU PRESSED UP BEFORE");
    for (i = 0; i < h; i++) {
      t[i] = [];
      for (j = 0; j < w; j++) {
        t[i][j] = cb[j][i];
      }
    }
    t = t.reverse();
    console.table(t);
    return t;
  } else if (btn === "down") {
    console.log("YOU PRESSED DOWN BEFORE");
    cb = cb.reverse();
    for (i = 0; i < h; i++) {
      t[i] = [];
      for (j = 0; j < w; j++) {
        t[i][j] = cb[j][i];
      }
    }
    console.table(t);
    return t;
  }
  return cb;
}
