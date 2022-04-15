import React, { useState, useEffect } from "react";

// depois
import { useCount } from "../contexts/Count";

export function Count1() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = count
  }, [count])

  return <>
    <h1>Contagem: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Somar</button>
  </>
  
}


export default function Count() {
  const [count, setCount] = useCount()

  useEffect(() => {
    document.title = count
  }, [count])

  return <>
    <h1>Contagem: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Somar</button>
  </>
  
}