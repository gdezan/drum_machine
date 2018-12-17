import React, { Component } from "react";
import "./App.css";
import DrumButton from "./drum_button";

class App extends Component {
  state = {
    bank: 0,
    power: 1,
    knob_position: "",
    knob_power_position: "",
    volume: "50",
    names: {
      q: ["Percussion 1", "Percussion 3"],
      w: ["Snare 1", "Snare 2"],
      e: ["Closed HH 1", "Closed HH 2"],
      a: ["Kick", "Closed HH 3"],
      s: ["Open Hi-Hat", "Percussion 4"],
      d: ["Percussion 2", "Chant"],
      z: ["Crash 1", "Crash 2"],
      x: ["808 1", "808 2"],
      c: ["Bass", "Clap"],
    },
    currentName: "",
  };

  componentDidMount() {
    document.addEventListener("keypress", this.handleKeyPress);
  }

  _renderName = () => {
    let name = this.state.power === 1 ? this.state.currentName : '';
    return (
      <div>
        <div className="screen sound-name">{name}</div>
      </div>
    );
  };

  _renderBankToggle = () => {
    return (
      <div style={{ margin: "10px" }}>
        <div className="toggle-title noselect">
          <span style={{ color: "#eea929" }}>B</span>
          {"ANK"}
        </div>
        <div className="knob-bg" onClick={this.bankSwitch}>
          <div className={`knob ${this.state.knob_position}`} />
        </div>
      </div>
    );
  };

  _renderPowerToggle = () => {
    return (
      <div style={{ margin: "10px 10px 10px 20px " }}>
        <div className="toggle-title noselect">{"POWER"}</div>
        <div className="knob-bg" onClick={this.powerSwitch}>
          <div className={`knob ${this.state.knob_power_position}`} />
        </div>
      </div>
    );
  };

  _onVolumeChange = event => {
      this.setState({ volume: event.target.value });
  };

  _renderVolumeSlider = () => {
    let { volume, power } = this.state;
    if (power === 1) {
      while (volume.length < 3) {
        volume = "0" + volume;
      }
    } else {
      volume = "";
    }

    return (
      <div>
        <div className="toggle-title">{"VOLUME"}</div>
        <div className="vol-scr">
          <div className="slidecontainer">
            <input
              type="range"
              min="0"
              max="100"
              value={this.state.volume}
              onChange={this._onVolumeChange}
              className="slider"
              id="myRange"
            />
          </div>
          <div className="screen" style={{ marginLeft: "10px" }}>
            {volume}
          </div>
        </div>
      </div>
    );
  };

  handleKeyPress = event => {
    if (event.key === "b") {
      this.bankSwitch();
    } else if (["q", "w", "e", "a", "s", "d", "z", "x", "c"].includes(event.key)) {
      this.setState({ currentName: this.state.names[event.key][this.state.bank] });
    }
  };

  handleClick = letter => {
    this.setState({ currentName: this.state.names[letter][this.state.bank] });
  };

  bankSwitch = () => {
    const { bank } = this.state;
    if (bank === 0) {
      this.setState({ knob_position: "knob_right", bank: 1 });
    } else if (bank === 1) {
      this.setState({ knob_position: "", bank: 0 });
    }
  };

  powerSwitch = () => {
    const { power } = this.state;
    if (power === 1) {
      this.setState({
        knob_power_position: "knob_right",
        power: 0,
        currentName: "",
      });
    } else if (power === 0) {
      this.setState({ knob_power_position: "", power: 1, currentName: ""});
    }
  };

  render() {
    let { volume, power, bank } = this.state;
    if (power === 0) {
      volume = 0;
    }
    const repeatedProps = {
      bank,
      volume,
      power,
    }
    return (
      <div className="App">
        <div className="wire" />
        <div className="controller">
          <div className="button-grid">
            <div onClick={() => this.handleClick("q")}>
              <DrumButton
                keypad={"Q"}
                names={["Percussion 1", "Percussion 3"]}
                src={["./sounds/Perc_1.wav", "./sounds/Perc_3.wav"]}
                {...repeatedProps}
              />
            </div>
            <div onClick={() => this.handleClick("w")}>
              <DrumButton
                keypad={"W"}
                names={["Snare 1", "Snare 2"]}
                src={["./sounds/Snare_1.wav", "./sounds/Snare_2.wav"]}
                {...repeatedProps}
              />
            </div>
            <div onClick={() => this.handleClick("e")}>
              <DrumButton
                keypad={"E"}
                names={["Closed HH 1", "Closed HH 2"]}
                src={["./sounds/Hat_1.wav", "./sounds/Hat_2.wav"]}
                {...repeatedProps}
              />
            </div>
            <div onClick={() => this.handleClick("a")}>
              <DrumButton
                keypad={"A"}
                names={["Kick", "Closed HH 3"]}
                src={["./sounds/Kick.wav", "./sounds/Hat_3.wav"]}
                {...repeatedProps}
              />
            </div>
            <div onClick={() => this.handleClick("s")}>
              <DrumButton
                keypad={"S"}
                names={["Open Hi-Hat", "Percussion 4"]}
                src={["./sounds/Open_Hat.wav", "./sounds/Perc_4.wav"]}
                {...repeatedProps}
              />
            </div>
            <div onClick={() => this.handleClick("d")}>
              <DrumButton
                keypad={"D"}
                names={["Percussion 2", "Chant"]}
                src={["./sounds/Perc_2.wav", "./sounds/Chant.wav"]}
                {...repeatedProps}
              />
            </div>
            <div onClick={() => this.handleClick("z")}>
              <DrumButton
                keypad={"Z"}
                names={["Crash 1", "Crash 2"]}
                src={["./sounds/Crash_1.wav", "./sounds/Crash_2.wav"]}
                {...repeatedProps}
              />
            </div>
            <div onClick={() => this.handleClick("x")}>
              <DrumButton
                keypad={"X"}
                names={["808 1", "808 2"]}
                src={["./sounds/808_1.wav", "./sounds/808_2.wav"]}
                {...repeatedProps}
              />
            </div>
            <div onClick={() => this.handleClick("c")}>
              <DrumButton
                keypad={"C"}
                names={["Bass", "Clap"]}
                src={["./sounds/Bass.wav", "./sounds/Clap.wav"]}
                {...repeatedProps}
              />
            </div>
          </div>
          <div className="controls">
            {this._renderName()}
            {this._renderVolumeSlider()}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
              {this._renderBankToggle()}
              {this._renderPowerToggle()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
