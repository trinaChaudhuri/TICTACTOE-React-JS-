import React from "react";
import Game from "./Game";
export default class UserName extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: "",
    };
  }
  handleChangePlayer1 = (event) => {
    this.setState({
      player1: event.target.value,
    });
  };
  handleChangePlayer2 = (event) => {
    this.setState({
      player2: event.target.value,
    });
  };
 
  render() {
    return (
      <>
        <div className="row">
          <form>
            <label>
              Player 1:
              <input
                type="text"
                value={this.state.player1}
                placeholder="enter name"
                onChange={this.handleChangePlayer1}
              />
            </label>
            <label>
              player 2:
              <input
                type="text"
                value={this.state.player2}
                placeholder="enter name"
                onChange={this.handleChangePlayer2}
              />
            </label>
          
          </form>
        </div>
        <Game player1={this.state.player1} player2={this.state.player2}  />
      </>
    );
  }
}
