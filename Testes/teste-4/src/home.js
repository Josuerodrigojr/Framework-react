import {Botao} from './components/Button'
import {Link} from 'react-router-dom'
import CountProvider from './contexts/Count';
import {Contador} from './components/Count/index'
import {Contador2} from './components/Count/index2'

const Home = () =>{
    return(<CountProvider>
    <h1> Desafio das Mensagens</h1>
    <p>
    *Um
    </p>
    <p>
    **Dois
    </p>
    <p>
    ***Três
    </p>
    <p>
    ****Quatro
    </p>

    <p> &nbsp;</p>
    
    <p>
    ****Quatro
    </p>
    <p>
    ***Três
    </p>
    <p>
    **Dois
    </p>
    <p>
    *Um
    </p>
    <p>
        <Link to='/'> <Botao texto={'App'} backgroundColor= {"orange"}/> </Link>
    </p>
    <p>
        <Contador/>
    </p>
    <p>
        <Contador2/>
    </p>
    
    </CountProvider>
    );
    
}

export {Home}