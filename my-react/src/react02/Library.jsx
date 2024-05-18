import React from "react";
import Book from "./Book";

function Library(props) {
  //컴포넌트 이름과 끝에 /로 끝남
  return (
    <div>
      <Book name="처음 만난 파이썬" numOfPage={300} /> 
      <Book name="처음 만난 AWS" numOfPage={400} />
      <Book name="처음 만난 리액트" numOfPage={500} />
    </div>
  );
}

export default Library;
