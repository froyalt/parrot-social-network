import "../Perfil/styles.scss";
import Header from "../Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Foto from "../../assets/img/zeca-urubu.png";
import { useEffect, useState } from "react";
import { listarUsuario } from "../../services/Teste-API/usuarios";


export default function Perfilcopy() {
  const [usuarios, setUsuarios] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listarUsuario();
        setUsuarios(response.data);

        if (response.status !== 200) {
          return alert("Algo deu errado!");
        }
      } catch (error) {
        alert("Algo deu errado!");
      }
    };

      getData();
  }, [setUsuarios]);

  return (
    <div>
      <Header />
      {usuarios.map((usuario) => (
                  <div className="d-flex justify-content-center">
                  <Card
                    id="card-perfil"
                    className="d-flex flex-row justify-content-around w-50"
                  >
                    <Card.Body className="d-flex justify-content-around align-items-center flex-wrap">
                      <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-3" />
                  <Card.Text className="mt-2 ms-2">
                    <span id="nome-perfil">{usuario.nome}</span>
                    <br />
                    {usuario.apartamento}
                    <br />
                    {usuario.email}
                    <br />
                    {usuarios.length} Publicações
                  </Card.Text>
                  <Button
                id="editar-button"
                className="ms-auto me-5 px-4 mt-2 align-self-start"
              >
                editar perfil
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}
