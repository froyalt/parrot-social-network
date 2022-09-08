import { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Logo from "../../assets/img/logo-colorido.png";
import { cadastroUsuario } from "../../services/Teste-API/usuarios";
import "../Cadastro/styles.scss";

export default function Cadastro() {

  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [apartment, setApartamento] = useState("");

  const cadastro = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
      // confirmarSenha,
      apartment
    };

    try {
      const response = await cadastroUsuario(payload);
      if(response.status !== 201) {
        return alert("Algo deu errado")
      }

      alert("Cadastro Efetuado com Sucesso!")
    } catch (error) {
      return alert("Algo deu errado")
      
    }
  }

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
                  className="logo-img pt-2"
                />
                <h4 className="py-3">CADASTRO</h4>
                <Form className="container w-75" onSubmit={cadastro}>
                  <Form.Group className="mb-3 mt-4" >
                    <Form.Control type="name" id="input-form" placeholder="nome" required value={name} onChange={(e) => setNome(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3 mt-4" >
                    <Form.Control type="email" id="input-form" placeholder="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 mt-4"
                    
                  >
                    <Form.Control type="password" id="input-form" placeholder="senha" required value={password} onChange={(e) => setSenha(e.target.value)} />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 mt-4"
                    
                  >
                    <Form.Control type="password" id="input-form" placeholder="confirmar senha" value={confirmarSenha} onChange={(e) => setConfirmarSenha(e.target.value)} />
                  </Form.Group>

                  <Form.Group className="mb-3 mt-4" >
                    <Form.Control type="name" id="input-form" placeholder="unidade/apartamento" required value={apartment} onChange={(e) => setApartamento(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group className="mb-3 mt-4" >
                    <Form.Control
                      className="my-5"
                      id="buttonEntrar"
                      type="submit"
                      value="entrar"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}
