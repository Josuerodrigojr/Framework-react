import { Link } from "react-router-dom";

import CountProvider from "../../contexts/Count";

import Count from "../../components/Count";
import Count2 from "../../components/Count2";
import { Table } from "react-bootstrap";
import { CustomCol } from "../../components/Button";
import { useProdutos } from "../../contexts/Produtos";

const Home = () => {
  const [produtos, setProdutos] = useProdutos()

  console.log('produtos home', produtos)

  const usuarios = [
    {
      id: 1,
      nome: "Mark",
      sobrenome: "Otto",
      usuario: "@mdo",
    },  {
      id: 2,
      nome: "Josue",
      sobrenome: "Rodrigo",
      usuario: "@jr",
    }
  ];

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
      <CustomCol>
        <span>Oi oi oi oi span</span>
      </CustomCol>

      <CountProvider>
        <Link to="/produtos">Go produtos sem parametros</Link>
        <br />
        <Link to={`/produtos/${1}`}>Go produtos com parametros</Link>

        <Count />

        <hr />

        <Count2 />

        <hr />

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
            {usuarios.map(usuario => 
              montarLista(usuario.id, usuario.nome, usuario.sobrenome, usuario.usuario)
            )}
          </tbody>
        </Table>
      </CountProvider>
    </>
  );
};

export { Home };
