import React from 'react'
import { useCount } from '../../contexts/Count'

export const Count = () => {
  const [count, setCount] = useCount()

  return <>
    <h1>Contador: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Me click</button>
  </>
}