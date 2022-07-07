import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    
    <Navbar bg="light" expand="lg">
      
      <Container>
        <Navbar.Brand href="#home">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Productos</Nav.Link>
            <Nav.Link href="#link">Descuentos</Nav.Link>
            <NavDropdown title="Plataforma" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Muebles</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Electrodomésticos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Cocina</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Ofertas
              </NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
  );
}

export default NavBar;