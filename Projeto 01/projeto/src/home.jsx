import {Link} from 'react-router-dom'
import {Botao, Coluna} from './components/Edição/style'
import {teste} from './App'
import logo from './prada.webp';
import {Container, Row, Col, Navbar, Card} from 'react-bootstrap'
import { useProdutos } from './variaveis'




// console.log(teste)
export const Home = () => {
  const [produtos, setProdutos] = useProdutos()
  
  console.log(produtos)


    return(<>
        <Container>
            <Row>
                <Coluna align="right">
                <Link to ='/cadastrar'>
            <Botao texto="Cadastrar" cor = "orange"/>
        </Link>
                </Coluna>
            </Row>
        </Container>

        <br/>

        <Container>
          <Row>
          <Col>
            <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={logo} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      
  </Card.Body>
</Card>

            </Col>
            <Col>
            <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={logo} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      
  </Card.Body>
</Card>

            </Col>


            <Col>
            <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={logo} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      
  </Card.Body>
</Card>

            </Col>

            <Col>
            <Card style={{ width: '15rem' }}>
    <Card.Img variant="top" src={logo} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      
  </Card.Body>
</Card>

            </Col>

          </Row>
      </Container>
      </>
    )
}



    //     <img src={logo} alt="logo" 
    //    />