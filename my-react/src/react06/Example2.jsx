import React, { useState, useEffect } from "react";
function Example2() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const handleChangeName = (e) => setName(e.target.value);
  const handleCountUp = () => setCount(count + 1);
  // 두번째 파라미터(deps)에 변경을 탐지할 값 추가
  // name이 바뀔 때만 실행
  useEffect(() => {
    console.log("렌더링!");
    console.log({ count, name });
  }, [name]);
  return (
    <div className="background">
      <p>이름입력</p>
      <input type={"text"} value={name} onChange={handleChangeName} />
      <p>카운트 : {count}</p>
      <button onClick={handleCountUp}>카운트 업</button>
    </div>
  );
}
export default Example2;
