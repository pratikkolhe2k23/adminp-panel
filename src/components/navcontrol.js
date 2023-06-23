import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavigationSideBar } from './sidebar';
let ct = "admin";

function TextLinkExample() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Exousia</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in for: <a href="#login">{ct}</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;