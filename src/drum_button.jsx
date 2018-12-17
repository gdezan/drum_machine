import React from "react";
import "./App.css";

export default class DrumButton extends React.Component {
  state = {
    selected: "",
    src: "",
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
    document.addEventListener("keyup", this.handleKeyUp);
    this.setState({src: this.props.src});
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
    this.setState({ selected: "selected" });
    this.playSound();
  };

  deselect = () => {
    this.setState({ selected: "" });
  };

  playSound = () => {
    this._audio.load();
    this._audio.play();
  };

  render() {
    return (
      <div
        className={`drum-button noselect ${this.state.selected}`}
        onMouseDown={this.select}
        onMouseUp={this.deselect}
        tabIndex="-1"
      >
        <audio
          src={this.state.src}
          ref={(a) => this._audio = a}
        />
        {this.props.keypad}
      </div>
    );
  }
}
