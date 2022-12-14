import Header from "../Header";
import { Card, Button } from "react-bootstrap";
import Foto from "../../assets/img/zeca-urubu.png";
import baseAPI from "../../services/Teste-API/config";
import "../Perfil/styles.scss";
import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function Perfil() {
  const [usuarios, setUsuarios] = useState();
  const asd = useSelector((store) => store.userReduce);

  // acesso ao id do cara logado, basta usar o decrypt
  const desestruturado = JSON.stringify(asd.token);

  console.log(desestruturado)

  const { id } = useParams();

  const fetchUser = useCallback(async () => {
    const response = await baseAPI.get(`/user/${id}`).then((res) => {
      return res.data;
    });

    setUsuarios(response);
  }, [setUsuarios, id]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  const [usuariosPost, setUsuariosPost] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3033/post/all-posts",
          {
            headers: {
              "auth": desestruturado,
            },
          }
        );
        setUsuariosPost(response.data);

        if (response.status !== 200) {
          return alert("Algo deu errado!");
        }
      } catch (error) {
        alert("Algo deu errado! (catch)");
      }
    };

    // getData();
  }, [setUsuariosPost]);

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
              <span id="nome-perfil">{usuarios?.name}</span>
              <br />
              ap?? {usuarios?.apartment}
              <br />
              {usuarios?.email}
              <br />
              00 Publica????es
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

      {usuariosPost.map((usuarioPost) => (

        <div className="d-flex justify-content-center">
          <Card
            id="card-post"
            className="d-flex flex-row justify-content-around w-50"
          >
            <Card.Body className="d-flex justify-content-around align-items-center card-post">
              <img
                src={Foto}
                alt="foto-de-perfil"
                className="foto-perfil me-3"
              />
              <Card.Text className="mt-2 ms-2">
                <span className="nome-publi">{usuario?.name} - ap?? {usuario?.apartment}</span>
                <br />
                <span className="data-publi">{usuarioPost.createdAt}</span>
                <br />
                {usuarioPost.content}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

      ))}

      <div className="d-flex justify-content-center">
        <Card
          id="card-post"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center card-post">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <span className="nome-publi">Nome - ap?? 82</span>
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
              <span className="nome-publi">Nome - ap?? 82</span>
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
