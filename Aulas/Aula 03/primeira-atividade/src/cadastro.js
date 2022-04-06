import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'


const Cadastro = () => {
    return <>
    <Form>
    <Container>
    <Link to="/"><Button variant="primary" type="submit">
    Tela inicial
  </Button></Link>
  </Container>
  </Form>
    </>
  }

  export {Cadastro}
  