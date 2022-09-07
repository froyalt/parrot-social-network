import Header from "../Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Foto from "../../assets/img/zeca-urubu.png";
import "../Feed/styles.scss";

export default function Feed() {
  return (
    <div>
      <Header />
      <div className="d-flex justify-content-center">
        <Card
          id="card-perfil"
          className="d-flex flex-row justify-content-around w-50 pt-4"
        >
          <Card.Body className="card-tweet d-flex align-items-center flex-wrap">
            <img src={Foto} alt="foto-de-perfil" className="foto-perfil me-4" />
            <Form.Control
              className="form-post"
              as="textarea"
              type="text"
              aria-describedby="text"
            />

            <Button
              id="editar-button"
              className="ms-auto me-5 px-5 mt-2 align-self-end"
            >
              publicar
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
              <span className="nome-publi">Vinicius - apê 82</span>
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
              <span className="nome-publi">Claudio - apê 82</span>
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
              <span className="nome-publi">Nat - apê 82</span>
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
              <span className="nome-publi">Dani - apê 82</span>
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
