import { useCount } from "../contexts/Count";

export default function Count2() {
  const [count] = useCount()

  return <>
    <h1>Contagem: {count}</h1>
  </>
  
}