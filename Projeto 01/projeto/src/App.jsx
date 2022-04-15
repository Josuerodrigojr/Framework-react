import './App.css';
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {Container, Row, Col, Form} from 'react-bootstrap'
import {Botao, Coluna} from './components/Edição/style'
import { useProdutos } from './variaveis'
import 'bootstrap/dist/css/bootstrap.min.css';
let i = 0;


function App() {
  const [titulo, setTitulo] = useState('');
  const [preco, setPreco] = useState(0);
  const [informacao, setInformacao] = useState('');
  const [peso, setPeso] = useState(0);
  const [produtos, setProdutos] = useProdutos("")

  const Salvar = (event) =>{
    event.preventDefault();
    
    
    setProdutos([{
      titulo,
      preco,
      informacao,
      peso
    }])
    console.log(produtos)

    
    
    

  }

  
  

  

  return (<>
  <Container>
    
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


export default App;
