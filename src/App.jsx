import React, { Component } from "react";
import "./App.css";
import DrumButton from "./drum_button";

class App extends Component {
  render() {
    console.log(this.refs)
    return (
      <div className="App">
        <div className="controller">
          <div className="button-grid">
            <DrumButton
              keypad={"Q"}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"}
            />
            <DrumButton
              keypad={"W"}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"}
            />
            <DrumButton
              keypad={"E"}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"}
            />
            <DrumButton
              keypad={"A"}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"}
            />
            <DrumButton
              keypad={"S"}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"}
            />
            <DrumButton
              keypad={"D"}
              src={"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"}
            />
            <DrumButton
              keypad={"Z"}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"}
            />
            <DrumButton
              keypad={"X"}
              src={"https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"}
            />
            <DrumButton
              keypad={"C"}
              src={"https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
