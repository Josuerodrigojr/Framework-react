import React from 'react'
import { useCount } from '../../contexts/Count'

export const Contador2 = () => {
  const [count] = useCount()
  
  return <h1>Contador: {count}</h1>
}