import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { HashLink  } from 'react-router-hash-link';
function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <Link style={{textDecoration:'none',color: 'black'}} to="/">MHTD</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link>
              <Link style={{textDecoration:'none',color: 'black'}} to="/">Accueil</Link>
            </Nav.Link>
            <Nav.Link>
              <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/contact/#contactForm">Consultation</HashLink>
            </Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/#solutions">Solutions</HashLink>
                </NavDropdown.Item>
              <NavDropdown.Item>
                 
                <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/#products">Boutique</HashLink>

                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
              <HashLink style={{textDecoration:'none',color: 'black'}} smooth to="/contact/#contactInfo">Contact</HashLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;