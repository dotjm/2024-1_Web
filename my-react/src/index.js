import React from "react";
import ReactDOM from 'react-dom/client';
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Clock from "./react03/Clock";
import CommentList from "./react04/CommentList";
import Counter from "./react06/Counter"
import Example2 from "./react06/Example2";
import App from "./App";
import Memoexam from "./react06/Memoexam";
import MemoExam2 from "./react06/MemoExam2";
import MemoExam3 from "./react06/MemoExam3";
import Accommodate from "./react06/Accommodate";
import LoginControl from "./react07/LoginControl";
// import MemoExam3Old from "./react06/MemoExam3Old";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    {/* <App />
    <Clock />
    <CommentList />
    <Counter />
    <Example2 />
    <Memoexam />
    <MemoExam2 /> */}
    {/* <MemoExam3 /> */}
    {/* <Accommodate /> */}
    <LoginControl />
  </React.StrictMode>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
