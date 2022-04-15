
import './App.css';
import {Link} from 'react-router-dom'
import {Container, Row, Col, Form, Button, Table} from 'react-bootstrap'
import { useProdutos } from './variaveis';



export const Teste = () => {
const [produtos, setProdutos] = useProdutos()
  
return <>

<Form onSubmit={Salvar}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Row>
    <Form.Label>Titulo: </Form.Label>
    </Row>
    <Row>
      <Col xs={5}>
    <Form.Control type="Titulo" placeholder="Digite o nome do produto" onChange={event => setTitulo(event.target.value)}/>


    </Col>
    </Row>
  </Form.Group>
  

  
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Row>
    <Form.Label>Preço: </Form.Label>
    </Row>
    <Row>
    <Col xs={5}>
    <Form.Control type="Preço" placeholder="Digite o preço do produto" onChange={event => setPreco(event.target.value)} />

    </Col>
    </Row>
  </Form.Group>


 
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Row>
    <Form.Label id="Informacao">Informação/Descrição: </Form.Label>
    </Row>
    <Row>
      <Col xs={5}>
    <Form.Control type="Informação/Descrição" placeholder="Digite a descrição do produto" onChange={event => setInformacao(event.target.value)}  as='textArea' rows={5}/>

    </Col>
    </Row>
  </Form.Group>

    
    
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <Row>
    <Form.Label>Peso: </Form.Label>
    </Row>
    <Row>
      <Col xs={5}>
    <Form.Control type="Peso" placeholder="Digite o peso do produto" onChange={event => setPeso(event.target.value)} />


    </Col>
    <Coluna align='right' tamanho={5}>
    <Form.Group controlId="formFile" className="mb-3">
    <Form.Control type="file" />
  </Form.Group>
    </Coluna>
    </Row>
  </Form.Group>
  
  

  <Row>
    <Coluna align='right'>
  <Botao texto="Salvar" cor='blue'/>
  </Coluna>

  <Coluna align='left'>
  <Link to='/'><Botao texto="Cancelar" cor='blue' /></Link>
  </Coluna>

  <Coluna>
  <Link to='/teste'>
  <Botao texto="Teste"/>
  </Link>
  </Coluna>
  </Row>
  
</Form>
</Container>
  </>
    
  );
}



</>

  

  

  }