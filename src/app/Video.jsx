// Play and pause a video
// useEffect를 사용하는 예시
import { useEffect } from "react";
import { useRef, useState } from "react";

export const Video = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isPlaying]);
  // 함수랑 array를 받음
  // isPlaying이 바뀔 때마다 실행

  return (
    <>
      <button
        onClick={() => {
          setIsPlaying((curr) => !curr);
        }}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <video
        ref={videoRef}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        loop
        playsInline
      />
    </>
  );
};
