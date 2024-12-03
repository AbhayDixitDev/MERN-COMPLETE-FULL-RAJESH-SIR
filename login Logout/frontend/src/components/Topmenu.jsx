import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { FaHome, FaUserPlus } from 'react-icons/fa';
import styled from 'styled-components';

const StyledNavbar = styled(Navbar)`
  background-color: #1a1a1a;
  box-shadow: 0 2px 4px rgba(0,0,0,.1);
`;

const StyledNavLink = styled(Nav.Link)`
  color: #ffffff !important;
  margin: 0 10px;
  transition: color 0.3s ease;

  &:hover {
    color: #007bff !important;
  }
`;

const StyledNavbarBrand = styled(Navbar.Brand)`
  color: #007bff !important;
  font-weight: bold;
  font-size: 1.5rem;
`;

const Topmenu = () => {
  return (
    <StyledNavbar expand="lg">
      <Container>
        <StyledNavbarBrand as={Link} to="home">Login System</StyledNavbarBrand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <StyledNavLink as={Link} to="home">
              <FaHome /> Home
            </StyledNavLink>
            <StyledNavLink as={Link} to="registration">
              <FaUserPlus /> Registration
            </StyledNavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
};

export default Topmenu;