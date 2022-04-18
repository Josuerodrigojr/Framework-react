import { Link } from "react-router-dom";

import CountProvider from "../../contexts/Count";

import Count from "../../components/Count";
import Count2 from "../../components/Count2";
import { Table } from "react-bootstrap";
import { CustomCol } from "../../components/Button";
import { useProdutos } from "../../contexts/Produtos";
let teste = [];
teste = ["Um", "dois", 'tres', "quatro"]

const Home = () => {
  const [produtos, setProdutos] = useProdutos()

  console.log('produtos home', produtos)

  const usuarios = [
    {
      id: teste[0],
      nome: "Mark",
      sobrenome: "Otto",
      usuario: "@mdo",
    },  {
      id: teste[1],
      nome: "Josue",
      sobrenome: "Rodrigo",
      usuario: "@jr",
    }, {
      id: teste[3],
      nome: "Josue Teste",
      sobrenome: "Rodrigo",
      usuario: "@jr",
    }
  ];
  
  

  const montarLista = (id, nome, sobrenome, usuario) => {
    return (
      <tr key={id}>

        <td><Link to={`/produtos/${id}`}>{id}</Link></td>
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
              <th>#</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Usuário</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map(x => 
              montarLista(x.id, x.nome, x.sobrenome, x.usuario)
            )}
          </tbody>
        </Table>

    </>
  );
};

export { Home };
