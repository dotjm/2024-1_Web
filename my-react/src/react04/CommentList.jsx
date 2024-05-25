import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  return (
    <div>
      <Comment name="나의리액트" comment="내가 만든 첫번째 컴포넌트이다" />
      <Comment name="리액트" comment="리액트는 새로운 세상을 만들어 주네요." />
    </div>
  );
}
export default CommentList;
