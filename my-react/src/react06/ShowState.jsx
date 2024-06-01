import React, { useMemo } from "react";
export default function ShowState({ number, text }) {
  const consoleNumber = (number) => {
    console.log("숫자가 변경되었습니다.");
    return number;
  };
  const consoleText = (text) => {
    console.log("글자가 변경되었습니다.");
    return text;
  };
  const showNum = consoleNumber(number);
  const showText = consoleText(text);
  return (
    <div>
      <p> 숫자 : {showNum}</p>
      <p> 글자 : {showText}</p>
    </div>
  );
}
