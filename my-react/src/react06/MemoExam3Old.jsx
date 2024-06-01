import React, { useState, useMemo } from "react";
import ShowState from "./ShowState";
export default function MemoExam3Old() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");
  // 일부러 과도한 연산을 하는 함수
  function heavyCalc() {
    let s = 0;
    for (let i = 0; i < 1000000000; i++) {
      s += i;
    }
    return s;
  }
  let calc = heavyCalc();
  //number 값 바꿔주는 함수
  const increaseNum = () => {
    setNumber((prev) => prev + 1);
  };
  const decreaseNum = () => {
    setNumber((prev) => prev - 1);
  };
  //text값 바꿔주는 함수
  const handleText = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <h1>엄청난 연산값</h1>
      <p>{calc}</p>
      <h2>숫자바꾸기</h2>
      <button onClick={increaseNum}>+</button>
      <button onClick={decreaseNum}>-</button>
      <h2>글자바꾸기</h2>
      <input type="text" onChange={handleText} />
      <ShowState number={number} text={text} />
    </>
  );
}

