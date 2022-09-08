import Header from "../Header";
import { useCallback, useEffect, useState } from "react";
import { listarUsuario } from "../../services/Teste-API/usuarios";
import { useParams } from 'react-router-dom'
import baseAPI from "../../services/Teste-API/config/index";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Foto from "../../assets/img/zeca-urubu.png";
import FotoPost from "../../assets/img/icone-cinza.svg";



import "../Perfil-copy/styles.scss";

export default function Perfilcopy() {
  const [usuarios, setUsuarios] = useState()

  const { id } = useParams()


  const fetchUser = useCallback(async () => {
    const response = await baseAPI.get(`/GI7aAo/tweet/${id}`).then ((res) => {
      return res.data
    })

    setUsuarios(response)
  }, [setUsuarios, id]);

    useEffect(() => {
      fetchUser()
    }, [fetchUser])

  return (
    <>
      <Header />
        <div className="d-flex justify-content-center">
        <Card
          id="card-perfil"
          className="d-flex flex-row justify-content-around w-50"
        >
          <Card.Body className="d-flex justify-content-around align-items-center flex-wrap">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
            <Card.Text className="mt-2 ms-2">
              <span id="nome-perfil">{usuarios?.nome}</span>
              <br />
              apê {usuarios?.apartamento}
              <br />
              {usuarios?.email}
              <br />
               Quantas publicações? inbox
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
        <Card id="card-perfil-vago" className="d-flex flex-row justify-content-around w-50" >
          <Card.Body  className="d-flex flex-column align-items-center flex-wrap">
            <span id="texto-post">Você ainda não fez nenhuma publicação :(</span>
            <img className="mt-3" src={FotoPost} />
          </Card.Body>
        </Card>
      </div>
      
    </>
  );
}