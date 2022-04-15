import React, { useState, useEffect } from 'react'

export const Count = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Só quando o componente nasce')
  }, []);

  useEffect(() => {
    console.log('Sempre que o count mudar: ', count)
  }, [count]);

  useEffect(() => {
    return () => console.log('Estou morrendo ;(')
  }, []);

  return <>
    <h1>Contador: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Me click</button>
  </>
}