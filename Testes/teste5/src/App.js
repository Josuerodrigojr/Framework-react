import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap'
import {Home} from './teste'



const App = () => {
  // console.log(count)
  let usuarios = [
    {
      id: "",
      nome: "",
      sobrenome: "",
      usuario: "",
    }
  ];



  console.log(usuarios)

  

  const montarLista = (id, nome, sobrenome, usuario) => {
    return (
      <tr key={id}>

        <td>{id}</td>
        <td>{nome}</td>
        <td>{sobrenome}</td>
        <td>{usuario}</td>
        
      </tr>
    )
  }

  return (
    <>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Usuário</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(usuario => 
              montarLista(usuario.id, usuario.nome, usuario.sobrenome, usuario.usuario)
            )}
          </tbody>
        </Table>
        
    </>
    
  );
};



export default App;
