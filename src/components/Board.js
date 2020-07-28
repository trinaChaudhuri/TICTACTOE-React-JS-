import React from "react";
import Square from "./Square";
import Timer from "./Timer";
import { calculateWinner } from "../helper";
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: "",
      showTimer: false,
      resetTimer: false,
      boardAttr: "X",
      seconds: 5,
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.boardAttr;
    this.setState({
      squares: squares,
      xIsNext:
        this.state.boardAttr === "X" ? this.props.player1 : this.props.player2,
      resetTimer: true,
      boardAttr: this.state.boardAttr === "X" ? "O" : "X",
      seconds: 11,
    });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        player1={this.props.player1}
        player2={this.props.player2}
      />
    );
  }
  startHandler = () => {
    this.setState({
      xIsNext: this.props.player1,
      showTimer: !this.state.showTimer,
      squares:Array(9).fill(null)
    });
  };
  setSeconds = (seconds) => {
    this.setState({
      seconds: seconds,
    });
  };
  render() {
    // const status = "Next Player: "+ (this.state.xIsNext ? this.props.player1 : this.props.player2);
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner || (this.state.showTimer && this.state.seconds == 0)) {
      status =
        "Winner: " +
        (this.state.boardAttr == "X" ? this.props.player2 : this.props.player1);
    } else {
      status = "Next player: " + this.state.xIsNext;
    }

    return (
      this.props.player1 &&
      this.props.player2 && (
        <>
          <button onClick={this.startHandler}>Start</button>
          <div className="status">{status}</div>

          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
          {this.state.showTimer && (
            <Timer
              player1={this.props.player1}
              player2={this.props.player2}
              showTimer={this.state.showTimer}
              resetTimer={this.state.resetTimer}
              seconds={this.state.seconds}
              setSeconds={this.setSeconds}
            />
          )}
        </>
      )
    );
  }
}

export default Board;
