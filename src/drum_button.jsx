import React from "react";
import "./App.css";

export default class DrumButton extends React.Component {
  state = {
    selected: "",
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentDidUpdate() {
    this._audio.volume = (parseFloat(this.props.volume || 0) * 0.01).toFixed(2);
  }

  handleKeyPress = event => {
    if (event.key === this.props.keypad.toLowerCase()) {
      this.select();
    }
  };

  handleKeyUp = event => {
    if (event.key === this.props.keypad.toLowerCase()) {
      this.deselect();
    }
  };

  select = () => {
    this.setState({ selected: "pressed" });
    if (this.props.power === 1) {
      this.setState({ selected: "pressed selected" });
      this.playSound();
    }
  };

  deselect = () => {
    this.setState({ selected: "" });
  };

  playSound = () => {
    this._audio.load();
    this._audio.play();
  };

  render() {
    if (!this.props.src && !this.props.bank) {
      return null;
    }
    return (
      <div
        className={`drum-button noselect ${this.state.selected}`}
        onMouseDown={this.select}
        onMouseUp={this.deselect}
        tabIndex="-1"
      >
        <audio
          src={require(`${this.props.src[this.props.bank]}`)}
          ref={a => (this._audio = a)}
          type="audio/wav"
        />
        {this.props.keypad}
      </div>
    );
  }
}
