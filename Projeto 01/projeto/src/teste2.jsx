
import './App.css';
import { Link, useParams } from "react-router-dom";
import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap'
import { useProdutos } from './variaveis';




export const Teste = () => {
const [produtos, setProdutos] = useProdutos()

let { id } = useParams();

  console.log("id", id);


// console.log(produtos[0].titulo)
return <>
<Container>
  <br/>
  
  <Row>
    <Col>
    Titulo:{ " " + produtos.titulo2[id -1]}
    </Col>
  </Row>
  <br/>

  <Row>
    <Col>
    Preço: {"R$" + " " + produtos.preco2[id -1] + ",00"} 
    </Col>
  </Row>
  <br/>

  <Row>
    <Col>
    Informações/Descrição: {produtos.informacao2[id -1]}
    </Col>
  </Row>
  <br/>

  <Row>
    <Col>
    Dimensão: {produtos.dimensao2[id -1]}
    </Col>
  </Row>
</Container>
</>

}