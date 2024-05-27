/**
 * Clock Component
 * 
 * Author: Jimin Jeong (@dotjm) - 202334748 정지민
 * Created on: 2024-05-26
 * 
 */

import React from "react";
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString("ko"),
    };
  }
  launchClock() {
    setInterval(() => {
      console.log("Updateing time...");
      this.setState({
        currentTime: new Date().toLocaleString("ko"),
      });
    }, 1000);
  }
  render() {
    console.log("Rendering Clock...");
    return <div>{this.state.currentTime}</div>;
  }
}
export default Clock;
