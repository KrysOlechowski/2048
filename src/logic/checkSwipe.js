export default function checkSwipe(up, right, down, left) {
  let direction = "";
  if (up > down) {
    direction = "up";
  } else if (down > up) {
    direction = "down";
  } else if (left > right) {
    direction = "left";
  } else if (right > left) {
    direction = "right";
  }

  return direction;
}
