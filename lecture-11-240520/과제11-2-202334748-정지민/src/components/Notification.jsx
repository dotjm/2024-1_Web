/**
 * Notification Component
 * 
 * Author: Jimin Jeong (@dotjm) - 202334748 정지민
 * Created on: 2024-05-26
 * 
 */

import React from "react";
const styles = {
  //styles 객체 정의
  wrapper: {
    //wrapper 속성 : css 스타일의 그룹 이름
    margin: 8, //css 스타일 들 정의
    padding: 8,
    display: "flex",
    flexDirection: "row",
    border: "1px solid grey",
    borderRadius: 16,
  },
  messageText: {
    color: "black",
    fontSize: 16,
  },
};
class Notification extends React.Component {
  // Notification 컴포넌트 정의 : 클래스 컴포넌트
  constructor(props) {
    // 생성자
    super(props);
    this.state = {}; // 빈 상태 객체 정의
  }

  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`);
  }
  componentDidUpdate() {
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }
  componentWillUnmount() {
    console.log(`${this.props.id} componentWillUnmount() called.`);
  }

  render() {
    return (
      //styles객체 wrapper속성과 messageText속성에 정의된 css들 적용
      <div style={styles.wrapper}>
        <span style={styles.messageText}>{this.props.message}</span>
      </div>
    );
  }
}
export default Notification;
