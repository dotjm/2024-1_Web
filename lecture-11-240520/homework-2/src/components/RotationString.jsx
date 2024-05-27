/**
 * RotationString Component
 * 
 * Author: Jimin Jeong (@dotjm) - 202334748 정지민
 * Created on: 2024-05-26
 * 
 */

import React from "react";

class RotationString extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      text: "자동 회전하는 텍스트입니다.",
    };
  }
  launchClock() {
    setInterval(() => {
      console.log("Updateing text...");

      let str = this.state.text;
      let firstChar = str.substr(0, 1);
      let remains = str.substr(1, str.length - 1);
      str = remains + firstChar;

      this.setState({
        text: str,
      });
    }, 200);
  }
  render() {
    console.log("Rendering RotationString...");
    return <div><span id="span" style={{ backgroundColor: 'yellow' }}>{this.state.text}</span></div>;
  }
}
export default RotationString;
