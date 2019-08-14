export default function rotateBoard(newBoard, btn) {
  const butt = btn;
  // let cb = [...newBoard];
  let cb = newBoard.map(arr => {
    return arr.slice();
  });
  var w = cb.length;
  var h = cb.length;

  var i,
    j,
    t = [];
  if (butt === "right") {
    console.log("YOU PRESSED RIGHT!");
    return cb;
  } else if (butt === "left") {
    console.log("YOU PRESSED LEFT");
    for (let i = 0; i < 4; i++) {
      cb[i] = cb[i].reverse();
    }
    // console.table(cb);
    return cb;
  } else if (butt === "up") {
    console.log("YOU PRESSED UP!");
    cb = cb.reverse();
    for (i = 0; i < h; i++) {
      t[i] = [];
      for (j = 0; j < w; j++) {
        t[i][j] = cb[j][i];
      }
    }
    // console.table(t);
    return t;
  } else if (butt === "down") {
    console.log("YOU PRESSED DOWN!");
    for (i = 0; i < h; i++) {
      t[i] = [];
      for (j = 0; j < w; j++) {
        t[i][j] = cb[j][i];
      }
    }
    t = t.reverse();
    // console.table(t);
    return t;
  }
  return cb;
}
