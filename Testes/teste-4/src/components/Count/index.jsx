import {useState, useEffect} from 'react'
import {Botao} from '../Button'

export const Contador = () =>{
    let conta = 0;
    const [count, setCount] = useState(0);
    
    // useEffect(() => {
    //     console.log("Foi o count")
    // }, [count]);

    // useEffect(() => {
    //     console.log("Foi o conta")
    // }, [conta]);

    return(
        <>
        <h1>Contador: {count}</h1>
        <button onClick={() => setCount(count+ 1)}>Me clique</button>
        <button onClick={() => setCount(count- 1)}>Não me clique</button>
        {/* <Botao texto = "Me clique" cor = "orange" onClick/> */}
        </>

    );
}

