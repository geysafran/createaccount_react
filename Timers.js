import React from "react";
import ".././App.css";

class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: 0
    };
  }

  playTimer = () => {
    if (this.timer == null) {
      this.timer = setInterval(() => {
        // eslint-disable-next-line
        this.state.timer += 1;
        this.setState(this.state);
      }, 1000);
    }
    // } else {
    //   clearInterval(this.timer);
    //   this.timer = null;
    // }
    this.setState(this.state);
  };
  pauseTime = () => {
    if (this.time !== null) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.setState(this.state);
  };

  render() {
    const sec = this.state.timer % 60;
    const min = parseInt(this.state.timer / 60);
    const hr = parseInt(min / 60);

    return (
      <div>
        <h1>This page</h1>
        <form
          onSubmit={ev => {
            ev.preventDefault();
            this.props.handleSetState("login");
          }}
        >
          <input type="submit" value="Voltar" />
        </form>
        <p>
          {hr}:{min}:{sec}
        </p>
        <button onClick={this.playTimer}>Play</button>
        <button onClick={this.pauseTime}>Pause</button>
      </div>
    );
  }
}

export default Timer;