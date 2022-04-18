import { Link, useParams } from "react-router-dom";
import React, { useMemo, useState } from "react";
import { Botao, Coluna } from "./components/Edição/style";
import { Teste } from "./teste2";
import logo from "./prada.webp";
import {
  Container,
  Row,
  Col,
  Navbar,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { useProdutos } from "./variaveis";
import { App } from "./App";
let id = 0;
let nomeProduto = 0;
let cards = [
  {
    id: "",
    nomeProduto: "",
  },
];
let erro = -2;
let identificacaoProdutos = [];

// console.log(teste)
export const Home = () => {
  const [produtos, setProdutos] = useProdutos();
  const [busca, setBusca] = useState("");

  if (produtos.arrayDeTitulos === undefined) {
    id = 0;
  } else {
    id = produtos.arrayDeTitulos.length;
    nomeProduto = produtos.arrayDeTitulos[id - 1];

    cards = [
      {
        id: id,
        nomeProduto: nomeProduto,
      },
    ];

    for (let index = 1; index < id; index++) {
      nomeProduto = produtos.arrayDeTitulos[index - 1];
      cards.push({
        id: index,
        nomeProduto: nomeProduto,
      });
    }
  }

  const montarLista = (id, nomeProduto) => {
    return (
      <Col>
        <Card style={{ width: "15rem" }}>
          <Link to={`/produto/${id}`}>
            <Card.Img variant="top" src={logo} />
          </Link>
          <Card.Body>
            <Card.Title>{nomeProduto}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  };

  identificacaoProdutos = [];
  for (let index = 1; index <= id; index++) {
    identificacaoProdutos.push(produtos.arrayDeTitulos[index - 1]);
  }

  const Clicar = (event) => {
    event.preventDefault();
  };

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
              <br />

              <br />

              <Link
                to={`/produto/${
                  identificacaoProdutos.indexOf(busca.toString()) + 1
                }`}
              >
                <Button type="submit">Buscar</Button>
              </Link>
            </Coluna>
          </Row>
        </Container>

        <br />

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
        <Row>{cards.map((x) => montarLista(x.id, x.nomeProduto))}</Row>
      </Container>
    </>
  );
};
