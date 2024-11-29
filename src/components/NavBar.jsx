import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor:"#cbffef"}} data-bs-theme="black">
        <Container>
        <span className='material-symbols-outlined' style={{fontSize: "40px", color: "black"}}>
            cake
        </span>
        {/* Texto logo */}
          <Navbar.Brand href="/home">Enfo Bolos</Navbar.Brand>

          <Navbar.Toggle aria-controls='minha-nav'/>
          <Navbar.Collapse id='minha-nav'>

            {/* Paginas */}
          <Nav className="me-auto">
            <Nav.Link href="/home" className='active'>Produtos</Nav.Link>
            <Nav.Link href="/produto/cadastro">Cadastrar Produtos</Nav.Link>
            <Nav.Link href="/cadastroUsuario">Criar Novo Usuário</Nav.Link>
         </Nav>
            {/* Sair */}

            <Nav className="justify-content-end">
            <Nav.Link href="/login" onClick={localStorage.removeItem("userName")}>Sair</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
