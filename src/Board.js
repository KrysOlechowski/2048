/* eslint-disable array-callback-return */
import React, { Component } from "react";
import slide from "./logic/slide";
import combine from "./logic/combine";
import checkIfMoved from "./logic/checkIfMoved";
import addRandom from "./logic/addRandom";
import getScore from "./logic/getScore";
import rotateBoard from "./logic/rotateBoard";
import setStart from "./logic/setStart";
import Swipe from "react-easy-swipe";
import checkSwipe from "./logic/checkSwipe";

let positionRightSwipe = [];
let positionLeftSwipe = [];
let positionDownSwipe = [];
let positionUpSwipe = [];
class Board extends Component {
  state = {
    score: 0,
    board: [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]
  };

  componentDidMount() {
    window.addEventListener("keydown", this.checkKey, false);
    let startBoard = [...this.state.board];

    startBoard = addRandom(startBoard);
    this.setState({
      board: startBoard
    });
  }
  restartGame = () => {
    let newBoard = [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]];
    newBoard = addRandom(newBoard);
    this.setState({
      board: newBoard,
      score: 0
    });
  };
  checkKey = e => {
    if (e.repeat) {
      return;
    }
    if (e.keyCode === 37) {
      this.swipe("left");
    } else if (e.keyCode === 38) {
      this.swipe("up");
    } else if (e.keyCode === 39) {
      this.swipe("right");
    } else if (e.keyCode === 40) {
      this.swipe("down");
    }
  };
  swipe = btn => {
    // -----------------------------------------------------------
    let newBoard = [...this.state.board];
    const oldBoard = newBoard.map(arr => {
      return arr.slice();
    });
    console.table(oldBoard);
    // console.table(oldBoard);
    // console.table(newBoard);
    newBoard = rotateBoard(newBoard, btn);
    // console.table(oldBoard);
    // console.table(newBoard);
    newBoard = slide(newBoard);
    // console.table(oldBoard);
    // console.table(newBoard);
    newBoard = combine(newBoard);
    // console.table(oldBoard);
    // console.table(newBoard);
    newBoard = slide(newBoard);
    // console.table(oldBoard);
    // console.table(newBoard);

    newBoard = setStart(newBoard, btn);

    console.table(newBoard);

    const ifMoved = checkIfMoved(newBoard, oldBoard);
    if (ifMoved) {
      // console.table(oldBoard);
      // console.table(newBoard);
      console.log("MOVED TRUE");
      let newScore = this.state.score;
      newBoard = addRandom(newBoard);
      newScore = getScore(newScore, newBoard);
      // console.table(newBoard);
      this.setState({
        score: newScore,
        board: newBoard
      });
    } else if (!ifMoved) {
      console.log("MOVED FALSE");
      return;
    }
  };
  onSwipeStart(event) {
    console.log("Start swiping...", event);
  }

  onSwipeMove(position, event) {
    //moveRight:
    if (position.x >= 10 && position.x > position.y) {
      positionRightSwipe.push({ right: position.x });
    } else if (position.x <= -10) {
      positionLeftSwipe.push({ left: position.x });
    } else if (position.y >= 10) {
      positionDownSwipe.push({ down: position.y });
    } else if (position.y <= -10) {
      positionUpSwipe.push({ up: position.y });
    }
    return;
  }

  onSwipeEnd = event => {
    let right = positionRightSwipe.length;
    let left = positionLeftSwipe.length;
    let down = positionDownSwipe.length;
    let up = positionUpSwipe.length;
    const swipeDirection = checkSwipe(up, right, down, left);
    positionRightSwipe.length = 0;
    positionLeftSwipe.length = 0;
    positionDownSwipe.length = 0;
    positionUpSwipe.length = 0;
    this.swipe(swipeDirection);
  };
  render() {
    const renderBoard = this.state.board.map(row => {
      return (row = row.map(cell => {
        if (cell === 0) {
          return <div className="cell cell-0" />;
        } else if (cell === 2) {
          return <div className="cell cell-2">{cell}</div>;
        } else if (cell === 4) {
          return <div className="cell cell-4">{cell}</div>;
        } else if (cell === 8) {
          return <div className="cell cell-8">{cell}</div>;
        } else if (cell === 16) {
          return <div className="cell cell-16">{cell}</div>;
        } else if (cell === 32) {
          return <div className="cell cell-32">{cell}</div>;
        } else if (cell === 64) {
          return <div className="cell cell-64">{cell}</div>;
        } else if (cell === 128) {
          return <div className="cell cell-128">{cell}</div>;
        } else if (cell === 256) {
          return <div className="cell cell-256">{cell}</div>;
        } else if (cell === 512) {
          return <div className="cell cell-512">{cell}</div>;
        } else if (cell === 1024) {
          return <div className="cell cell-1024">{cell}</div>;
        } else if (cell === 2048) {
          return <div className="cell cell-2048">{cell}</div>;
        } else if (cell === 4096) {
          return (
            <>
              <div className="cell cell-4096">{cell}</div>
              <div className="cell-winner" />
            </>
          );
        }
      }));
    });
    return (
      <div className="wrapper">
        <Swipe
          onSwipeStart={this.onSwipeStart}
          onSwipeMove={this.onSwipeMove}
          onSwipeEnd={this.onSwipeEnd}
        >
          <div className="top">
            <span>{this.state.score}</span>{" "}
            <span onClick={this.restartGame} className="restart">
              Restart
            </span>
          </div>

          <div className="board"> {renderBoard}</div>
        </Swipe>
      </div>
    );
  }
}

export default Board;
