import React from "react";

import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'




function App() {
  return (
    <div className="App">
      <main className="App-header">

        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Container>
            <Row>
              <Col>
              <Form.Label>Nome:</Form.Label>
              </Col>
              <Col>
              <Form.Control type="name" placeholder="Nome do usuário" />
              </Col>
            </Row>
            <Row>
            <Col>
              <Form.Label>Sobrenome:</Form.Label>
              </Col>
              <Col>
              <Form.Control type="name" placeholder="Sobrenome do usuário" />
              </Col>
            </Row>
            <Row>
              <Col>
              <Form.Label>Sexo: </Form.Label>
              </Col>
              <Col>
              <Form.Group className="mb-3">
    
    <Form.Select>
      <option>Masculino</option>
      <option>Feminino</option>
      <option>Outros:</option>
    </Form.Select>
  </Form.Group>
              </Col>
            </Row>
          </Container>
        

  </Form.Group>

  
  
  <Row>
    <Link to="./cadastro"> <Button variant="primary" type="submit">
    Cadastro
  </Button></Link>
  </Row>
</Form> 


      </main>
    </div>
  );
}

export default App;
