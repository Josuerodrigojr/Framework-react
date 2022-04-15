import {useState} from 'react'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';
let Teste321=0;



// export const teste3 = () =>{
//     const [Teste321, setTeste321] = useState(0);
//     console.log(setTeste321(Teste321 + 1))

// }



export const Home = () =>{
    const [count, setCount] = useState(0);
    
    
    return(
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Row>
          <Form.Label>Peso: </Form.Label>
          </Row>
          <Row>
            <Col xs={5}>
          <Form.Control type="Peso" placeholder="Digite o peso do produto" id='peso'/>
          </Col>
          <Col>
         
          </Col>
          </Row>
          <Button onClick={() => {setCount(count + 1)}}>Peso</Button>
        </Form.Group>
        
    )
    
    
}



