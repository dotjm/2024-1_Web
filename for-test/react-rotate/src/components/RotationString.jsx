import React from "react";

class RotationString extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentString: "Merry Christmas!!!",
    };
  }

  launchClock() {
    setInterval(() => {
      let str = this.state.currentString;
      let firstChar = str.substr(0, 1);
      let remains = str.substr(1, str.length - 1);
      str = remains + firstChar;
      console.log("Updateing time...");

      this.setState({
        currentString: str,
      });
    }, 1000);
  }

  render() {
    console.log("Rendering Clock...");
    return <div>{this.state.currentString}</div>;
  }
}
export default RotationString;
