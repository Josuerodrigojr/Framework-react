import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {Botao, Botao2} from  './components/Button'
import {Contador} from './components/Count/index'
import {Contador2} from './components/Count/index2'

function App() {
  return (
    <>
    <Container>
      <Row>
        <Col> <Link to='/home'> <Botao texto = "Exercicio 1" cor="red"/></Link></Col>
        <Col><Botao2 texto = "Teste do botao" cor="red"/></Col>
        <Col><Botao texto = "Teste do botao 2" cor="green"/></Col>
        <Col><Button> Teste 4</Button></Col>
        <Col><Button> Teste 5</Button></Col>
        <Col><Button> Teste 6</Button></Col>
        
      </Row>
      <Row>
        <Col>
        <Contador/>
        </Col>
      </Row>
      <Row>
        <Col>
        <Contador2 />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
