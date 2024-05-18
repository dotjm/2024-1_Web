import React from "react";

// 컴포넌트 정의
function Book(props) {
    // 컴포넌트 이름은 대문자로 시작해야 함. 파라메터는 props
    //틸트 : 문자열 사용시 자바스크립트 변수를 사용 가능 ${} 형식
  return (
    <div>
      <h1>{`이 책의 이름은 ${props.name}입니다.`}</h1> 
      <h2>{`이 책은 총 ${props.numOfPage}입니다.`}</h2>
    </div>
  );
}

export default Book; //export : 함수나 클래스를 외부에서 사용할 수 있도록 함.
