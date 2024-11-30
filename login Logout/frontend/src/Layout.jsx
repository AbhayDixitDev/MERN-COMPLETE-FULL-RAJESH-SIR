
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const  Layout=()=>{
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link> 
            <Nav.Link as={Link} to="display">Display</Nav.Link>
            
            <NavDropdown title="Actions" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="search">Search</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="actions">Delete & Update</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    

    </Navbar>
      <br />
      <Outlet/>
      </>


  );
}

export default Layout;