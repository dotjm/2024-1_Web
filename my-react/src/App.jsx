import React, { useState, useCallback, useEffect } from "react";
function App() {
  const [show, setShow] = useState(false);
  const handleToggle = () => {
    setShow(!show);
  };
  return (
    <>
      {show && <Toggle />}
      <button onClick={handleToggle}>{show ? "잘가 토글" : "안녕 토글"}</button>
    </>
  );
}
function Toggle() {
  useEffect(() => {
    console.log("Hi Toggle....");
    return () => {
      console.log("Bye Toggle...");
    };
  }, []);
  return <div style={{ fontSize: 32 }}>Toggle</div>;
}
export default App;
