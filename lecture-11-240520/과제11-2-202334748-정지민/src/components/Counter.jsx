/**
 * Counter Component
 * 
 * Author: Jimin Jeong (@dotjm) - 202334748 정지민
 * Created on: 2024-05-26
 * 
 */

import React from "react";
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.increaseCount = this.increaseCount.bind(this);
  }
  increaseCount() {
    const count = this.state.count;
    this.setState({
      count: count + 1,
    });
  }
  render() {
    return (
      <div>
        <span>카운트 : {this.state.count}</span>
        <br />
        <br />
        <button onClick={this.increaseCount}>카운트 증가</button>
      </div>
    );
  }
}
export default Counter;
