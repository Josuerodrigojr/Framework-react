import './App.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container>
      <Row>
        <Col>
        <Button>Teste</Button>
        </Col>
        <Col>
        <Link to="/teste"> <Button> Página teste</Button></Link>
        </Col>
        <Col>
        
        </Col>
      </Row>
    </Container>
    
   
  );
}

export default App;
