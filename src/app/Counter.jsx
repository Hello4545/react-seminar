// Increment the count when the button is clicked
import { useState } from "react";

// react도 일종의 library

export const Counter = () => {
  const [count, setCount] = useState(0);
  // 0은 count의 initial value

  return (
    <>
      <button
        onClick={() => {
          setCount((curr) => curr + 1);
          // setCount(count+1); 로 쓰면 여러 줄 써도 계속 1씩 올라가는 문제 발생
        }}
      >
        Clcked {count} times
      </button>
    </>
  );
};
