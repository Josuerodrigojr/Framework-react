
import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import './App.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
import Cadastro from './Cadastro'




function App() {
  return (
    <div className="App">
      <main className="App-header">
        <p>
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

  
  <Button variant="primary" type="submit">
    Cadastro
  </Button>
</Form> 

  <BrowserRouter>
  <Route component = {Cadastro} path="/cadastro"/>
  </BrowserRouter>


        </p>

      </main>
    </div>
  );
}

export default App;
