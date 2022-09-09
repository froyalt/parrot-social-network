import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import baseAPI from "../../services/Teste-API/config/index";
import { Navbar, Container } from "react-bootstrap";
import Logo from "../../assets/img/logo-horizontal-colorido.png";
import "../Header/styles.scss";
import { useSelector } from "react-redux";
export default function Header() {
  // const [usuarios, setUsuarios] = useState();

  // const { id } = useParams();

  // const fetchUser = useCallback(async () => {
  //   const response = await baseAPI.get(`/GI7aAo/tweet/${id}`).then((res) => {
  //     return res.data;
  //   });

  //   setUsuarios(response);
  // }, [setUsuarios, id]);

  // useEffect(() => {
  //   fetchUser();
  // }, [fetchUser]);

  const userLogged = useSelector((store) => store.userReduce)
console.log(userLogged)

  return (
    <Navbar className="header">
      <Container fluid>
        <Navbar.Brand>
          <img className="img-header w-50" src={Logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <span className="user-text">Olá, {userLogged.token.user.name} | </span>{" "}
            <a id="sair" href="#login">
              sair
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
