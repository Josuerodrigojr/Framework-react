import { Link, useParams } from "react-router-dom";
import React, {useMemo, useState} from "react";
import { Botao, Coluna } from "./components/Edição/style";
import { Teste } from "./teste2";
import logo from "./prada.webp";
import { Container, Row, Col, Navbar, Button, Card, Form } from "react-bootstrap";
import { useProdutos } from "./variaveis";
import { App } from "./App";
let id = 0;
let teste2 = 0;
let testes = [
  {
    id: "",
    teste2: "",
  },
];
let erro = -2;
let teste20= [];


// console.log(teste)
export const Home = () => {
  const [produtos, setProdutos] = useProdutos();
  const [busca, setBusca] = useState("");
  const [bolsas, setBolsas] = useState([]);
  

  if (produtos.titulo2 === undefined) {
    id = 0;
  } else {
    console.log(
      "Estou aqui e ess é o treco que estou atrás",
      produtos.titulo2.length
    );
    id = produtos.titulo2.length;
    teste2 = produtos.titulo2[id - 1];

    testes = [
      {
        id: id,
        teste2: teste2,
      },
    ];
    

    

    for (let index = 1; index < id; index++) {
      teste2 = produtos.titulo2[index - 1];
      testes.push({
        id: index,
        teste2: teste2,
      });
      
      
      
    }


    

  }

  const montarLista = (id, teste2) => {
    return (
      <Col>
        <Card style={{ width: "15rem" }}>
          <Link to={`/produto/${id}`}>
            <Card.Img variant="top" src={logo} />
          </Link>
          <Card.Body>
            <Card.Title>{teste2}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  teste20= [];
  for (let index = 1; index <= id; index++) {

    teste20.push(produtos.titulo2[index - 1])
  }

const Clicar = (event) =>{
  event.preventDefault();
  
  
  erro = teste20.indexOf(busca.toString())
  
  console.log('busca',busca)
  console.log('teste20',teste20)


  console.log(erro)
}



  return (
    <>
    <Form onSubmit={Clicar}>
    <Container>
      <Row>
        <Coluna align="right">
              <input
                type="text"
                value={busca}
                onChange={(event) => setBusca(event.target.value)}
        
              />
              

              <br/>

              <br/>
              
            <Link to={`/produto/${teste20.indexOf(busca.toString()) + 1}`}><Button type="submit">Buscar</Button></Link>


        </Coluna>
      </Row>
    </Container>

<br/>


      <Container>
        <Row>
          <Coluna align="right">
            <Link to="/cadastrar">
              <Botao texto="Cadastrar" cor="orange" />
            </Link>
          </Coluna>
        </Row>
      </Container>
      </Form>

      <br />
      <Container>
        <Row>{testes.map((x) => montarLista(x.id, x.teste2))}</Row>
      </Container>
    </>
  );
};
