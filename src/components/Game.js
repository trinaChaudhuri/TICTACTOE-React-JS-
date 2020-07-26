import React from "react";
import Board from "./Board";
export default class Game extends React.Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="game">
        <div className="game-board">
          <Board player1={this.props.player1} player2={this.props.player2}/>
        </div>
       
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
