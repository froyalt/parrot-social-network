import Header from "../Header";
import {Card, Button} from "react-bootstrap"
import Foto from "../../assets/img/zeca-urubu.png";
import { useSelector } from "react-redux";
import { listarUser } from "../../services/Teste-API/config/user";

import "../Perfil/styles.scss";
import { useEffect, useState } from "react";

export default function Perfil() {

const userLogged = useSelector((store) => store.userReduce)
console.log(userLogged)

// const [user, setUser] = useState([])
// useEffect(() => {
//   const getData = async () => {

//     try {
//    const response = await listarUser();

//    setUser(response.data)
//     } catch (error) {
//       alert("Deu algo errado!")
//     }

//   };
//   getData();
// }, [setUser]);

  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <Card
          id="card-perfil"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center flex-wrap">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <span id="nome-perfil">{userLogged.token.user.name}</span>
              <br />
              apê {userLogged.token.user.apartment}
              <br />
              {userLogged.email}
              <br />
              00 Publicações
            </Card.Text>

            <Button
              id="editar-button-perfil"
              className="ms-auto me-5 px-4 mt-2 align-self-start"
            >
              editar perfil
            </Button>
          </Card.Body>
        </Card>
      </div>

      <div className="d-flex justify-content-center">
        <Card
          id="card-post"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center card-post">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <span className="nome-publi">Nome - apê 82</span>
              <br />
              <span className="data-publi">00/00/2022 00:00</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Card
          id="card-post"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center card-post">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <span className="nome-publi">Nome - apê 82</span>
              <br />
              <span className="data-publi">00/00/2022 00:00</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-center">
        <Card
          id="card-post"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center card-post">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <span className="nome-publi">Nome - apê 82</span>
              <br />
              <span className="data-publi">00/00/2022 00:00</span>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
