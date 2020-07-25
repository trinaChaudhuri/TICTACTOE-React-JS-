import React from "react";
import "./LoginScreen.css";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      player1: "",
      player2: "",
    };
  }
  onChangePlayer1handler = (e) => {
    this.setState({
      player1: e.target.value,
    });
  };
  onChangePlayer2handler = (e) => {
    this.setState({
      player2: e.target.value,
    });
  };
  startSubmitHandler = (player1, player2) => {
    this.setState({
      player1: player1,
      player2: player2,
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={()=>this.startSubmitHandler(this.state.player1,this.state.player2)}>
          <div className="row">
            <div className="col-25">
              <label>Player 1</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="player2"
                name="player1"
                value={this.state.player1}
                onChange={this.onChangePlayer1handler}
                placeholder="Enter Your name"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Player 2</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                id="player2"
                name="player2"
                value={this.state.player2}
                onChange={this.onChangePlayer2handler}
                placeholder="Enter Your name"
              />
            </div>
          </div>
          <div className="row">
            <input type="submit" value="Start" />
          </div>
        </form>
      </div>
    );
  }
}

export default LoginScreen;
