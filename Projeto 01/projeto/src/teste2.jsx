
import './App.css';
import { Link, useParams } from "react-router-dom";
import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap'
import { useProdutos } from './variaveis';




export const Teste = () => {
const [produtos, setProdutos] = useProdutos()

let { id } = useParams();


return <>
<Container>
  <br/>
  
  <Row>
    <Col>
    Titulo:{ " " + produtos.titulosDosProdutos[id -1]}
    </Col>
  </Row>
  <br/>

  <Row>
    <Col>
    Preço: {"R$" + " " + produtos.precosDosProdutos[id -1] + ",00"} 
    </Col>
  </Row>
  <br/>

  <Row>
    <Col>
    Informações/Descrição: {produtos.informacoesDosProdutos[id -1]}
    </Col>
  </Row>
  <br/>

  <Row>
    <Col>
    Dimensão: {produtos.dimensoesDosProdutos[id -1]}
    </Col>
  </Row>
</Container>
</>

}