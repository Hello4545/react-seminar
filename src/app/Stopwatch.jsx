// Create a stopwatch using setInterval and clearInterval.
import { useState } from "react";
import { useRef } from "react";

// unmount (stop button)을 누를 떄 reset 되어야 함

export const Stopwatch = () => {
  const intervalId = useRef(null);

  const [startTime, setStartTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);

  const seconds = currentTime && startTime ? (currentTime - startTime) / 1000 : 0;
  // currentTime이랑 startTime이 존재하는 경우에만 계산

  // let tmpInterval = null; 은 리렌더링할 때마다 null로 업데이트 됨

  return (
    <>
      <span>{seconds.toFixed(2)} seconds</span>
      {/* seconds는 보여지는 거니까 state로 관리 필요 */}
      <div>
        <button
          onClick={() => {
            const now = Date.now();
            setStartTime(now);
            setCurrentTime(now);

            intervalId.current = setInterval(() => {
              setCurrentTime(Date.now());
            }, 10);
            // 10 millisecond마다 update
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            clearInterval(intervalId.current);
          }}
        >
          Stop
        </button>
      </div>
    </>
  );
};
