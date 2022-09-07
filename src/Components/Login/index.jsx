import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Logo from "../../assets/img/logo-colorido.png";
import { Link } from "react-router-dom";
import "../Login/styles.scss";

export default function Login() {
  return (
    <main className="container-bg">
      <div className="container vh-100">
        <div className="row h-100 d-flex align-items-center justify-content-center">
          <div className="col-xs-10 col-sm-8 col-md-5">
            <Card id="card" className="shadow-sm text-center">
              <Card.Body>
                <Card.Img
                  src={Logo}
                  alt="logo-login"
                  className="logo-img pt-5"
                />
                <h4 className="py-3">LOGIN</h4>
                <Form className="container w-75">
                  <Form.Group className="mb-3 mt-4">
                    <Form.Control id="input-form" type="email" placeholder="email" required />
                  </Form.Group>

                  <Form.Group className="mb-3 mt-4">
                    <Form.Control id="input-form" type="password" placeholder="senha" required />
                  </Form.Group>

                  <Form.Group className="mb-3 mt-4">
                    <Form.Control
                      className=""
                      id="buttonEntrar"
                      type="submit"
                      value="entrar"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
                <Link id="link" className="mb-5" to="/cadastro">cadastre-se</Link>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
