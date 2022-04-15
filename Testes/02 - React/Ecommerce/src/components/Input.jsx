import React, { useRef } from "react";

export default function Input() {
  const input = useRef(null)

  const focarInput = () => {
    input.current.focus()
  }

  return <>
    <input ref={input} type="text" />
    <button onClick={focarInput}>Foco no input</button>
  </>
  
}