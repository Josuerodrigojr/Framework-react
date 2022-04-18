import { useState } from "react";
import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useProdutos } from "../../contexts/Produtos";

const ProdutoEdit = (props) => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [produtos, setProdutos] = useProdutos()

  // Aqui pegamos o parametro. Observe que o nome da propriedade é o mesmo da definidada na rota.
  let { id } = useParams();

  console.log('id', id)

  const handlerSubmit = (event) => {
    event.preventDefault()
    
    setProdutos([{
      email,
      password
    }])
  }

  return (
    <Container>
      <Form onSubmit={handlerSubmit} >
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={event => setEmail(event.target.value)} />

              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={event => setPassword(event.target.value)} />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export { ProdutoEdit };
