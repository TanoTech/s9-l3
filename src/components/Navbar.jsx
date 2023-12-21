import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Navbar.css'
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand as={Link}><img src="/assets/imgs/forTheHorde.webp" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <NavDropdown title="Generi" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to='/fantasy'>Fantasy</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/history'>History</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/horror'>Horror</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/romance'>Romance</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/scifi'>Scifi</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;