import React from 'react'
import { useCount } from '../../contexts/Count'

export const MostrarCount = () => {
  const [count] = useCount()
  
  return <h1>Contador: {count}</h1>
}