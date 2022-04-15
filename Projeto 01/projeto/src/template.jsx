import { Navbar, Container } from "react-bootstrap";
import logo from './prada.webp';


export const Template = (props) =>{
    return(<>
    <header>
        
    
    <Navbar bg='light' variant="light">
          <Container>
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="170"
                height="120"
              />{' '}

            </Navbar.Brand>
          </Container>
        </Navbar>
    </header>
    <main> 
        {props.children}
    </main>

    <footer><h1>Teste de rodapé</h1></footer>
    
    </>
    );
}


