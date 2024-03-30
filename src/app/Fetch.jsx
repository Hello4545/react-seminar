// Fetch an image from the API and display it
// API fetching 관련
// API call은 useEffect 내에서 함 --> react 바깥 쪽에 있는 시스템과 연결해야 하기 때문
// useEffect는 백으로 보내기 위해서 사용?
import { useState } from "react";
import { useEffect } from "react";

const fetchImage = async () => {
  // async 함수의 경우에는 await을 무조건 해줘야 함
  const res = await fetch("https://nekos.best/api/v2/happy");
  const data = await res.json();
  return data.results[0].url;
};

export const Fetch = () => {
  // imageUrl을 state로 바꿔주기
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    // JS promise는 기다리는 함수
    // useEffect는 async 함수를 쓸 수 없음
    const apiCall = async () => {
      // async 함수는 항상 promise를 반환함
      const url = await fetchImage();
      setImageUrl(url);
    };
    apiCall();
  }, []);
  // 아무것도 안 넣어야 제일 처음에 렌더링 되고 그 이후엔 안 됨
  return (
    <>
      <img src={imageUrl} alt="Happy anime character" />
    </>
  );
};
