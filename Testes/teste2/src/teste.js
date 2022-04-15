import {Link} from 'react-router-dom';


const Teste = () =>{
    return (<>
        <Link to='/'><h1>App</h1></Link>
        <button style={{
            backgroundColor: 'pink',
            color: '#fff'
          }}>Teste 2</button>
          </>
    )
}

export {Teste}