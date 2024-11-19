import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" bg="success" data-bs-theme="dark">
        <Container>
        <span className='material-symbols-outlined' style={{fontSize: "40px", color: "white"}}>
            store
        </span>
        {/* Texto logo */}
          <Navbar.Brand href="/home">Genérico Supermercados</Navbar.Brand>

          <Navbar.Toggle aria-controls='minha-nav'/>
          <Navbar.Collapse id='minha-nav'>

            {/* Paginas */}
          <Nav className="me-auto">
            <Nav.Link href="/home" className='active'>Produtos</Nav.Link>
            <Nav.Link href="/cadastro">Cadastro</Nav.Link>
         </Nav>
            {/* Sair */}

            <Nav className="justify-content-end">
            <Nav.Link href="/login">Sair</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
