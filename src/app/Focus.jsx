// Focus input on button click
import { useRef } from "react";

export const Focus = () => {
  const inputRef = useRef();

  return (
    <>
      <input ref={inputRef} type="text" />
      <button
        onClick={() => {
          // console.log(inputRef.current);
          // console.log(inputRef.current.value);
          inputRef.current.focus();
        }}
      >
        Focus the input
      </button>
    </>
  );
};
