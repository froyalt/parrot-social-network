import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../../assets/img/logo-horizontal-colorido.png";
import "../Header/styles.scss";

export default function Header() {
  return (
    <Navbar className="header">
      <Container fluid>
        <Navbar.Brand>
          <img className="img-header w-50" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className="user-text">Olá, Usuário | </span>{" "}
            <a id="sair" href="#login">
              sair
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
