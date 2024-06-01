import React, { useState, useCallback, useMemo } from "react";
function Memoexam() {
  const [button, setButtonX] = useState(0);
  const [buttonY, setButtonY] = useState(0);
  const handleButtonX = () => {
    setButtonX((prev) => prev + 1);
  };
  const handleButtonY = () => {
    setButtonY((prev) => prev + 1);
  };
  useMemo(() => {
    console.log(button);
  }, [button]);
  return (
    <>
      <button onClick={handleButtonX}>X</button>
      <button onClick={handleButtonY}>Y</button>
    </>
  );
}
export default Memoexam;
