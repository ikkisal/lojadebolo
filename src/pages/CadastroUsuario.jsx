// importando components do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Image from "react-bootstrap/Image";

// Importação de componentes
import NavBarra from "../components/NavBar";

// Importando o hook useState para monitorar a mudança das variáveis
import { useState } from "react";

//Importação do navigate pra transitar entre páginas
import { useNavigate } from "react-router-dom";

// Url da api
const urlUser = 'http://localhost:5000/usuarios'

const CadastroUsuario = () => {
  
  //Link produto sem imagem
  const linkImagem =
    "https://saae.lucasdorioverde.mt.gov.br/arquivos/setores/sem_imagem_avatar.png";

  //Variáveis para o produto
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [imagemUrl, setImagemUrl] = useState("");

  //Variáveis para o alerta
  const [alertClass, setAlertClass] = useState("mb-3 d-none");
  const [alertMensagem, setAlertMensagem] = useState("");
  const [alertVariant, setAlertVariant] = useState("danger");

  // Criando o navigate
  const navigate = useNavigate();

  //Função pra lidar com o envio dos dados
  const handleSubmit = async (e) => {
    //Previne a página de ser recarregada
    e.preventDefault();

    if (nome != "") {
      if (email != "") {
        if (senha != "") {
          const usuario = { nome, email, senha, imagemUrl };
          console.log(usuario);
          try {
            const req = await fetch(urlUser, {
              method: "POST",
              headers: { "Content-type": "application/json" },
              body: JSON.stringify(usuario),
            });
            const res = req.json();
            console.log(res);
            setAlertClass("mb-3 mt-2");
            setAlertVariant("success");
            setAlertMensagem("Usuário cadastrado com sucesso");
            alert("Usuário cadastrado com sucesso");
            // navigate("/home");
          } 
          catch (error) {
            console.log(error);
          }
        } 
            else {
            setAlertClass("mb-3 mt-2");
            setAlertMensagem("O campo nome não pode ser vazio");
          }
        } else {
          setAlertClass("mb-3 mt-2");
          setAlertMensagem("O campo email não pode ser vazio");
        }
      } else {
        setAlertClass("mb-3 mt-2");
        setAlertMensagem("O campo senha não pode ser vazio");
      }
    };

  return (
    <div>
      <NavBarra />
      <Container>
        <h1>Cadastrar Usuários</h1>
        <form className="mt-3" onSubmit={handleSubmit}>
          <Row>
            <Col xs={6}>
              {/* Caixinha de nome */}
              <FloatingLabel
                controlId="floatingInputNome"
                label="Nome"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite o nome do usuário"
                  value={nome}
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                />
              </FloatingLabel>

              {/* Caixinha de email */}
              <FloatingLabel
                controlId="floatingInputEmail"
                label="Email"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="Digite o email do usuário"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingInputSenha"
                label="Senha"
                className="mb-3"
              >
                <Form.Control
                  type="password"
                  placeholder="Digite a senha do usuário"
                  value={senha}
                  onChange={(e) => {
                    setSenha(e.target.value);
                  }}
                />
              </FloatingLabel>
              
            </Col>
            <Col xs={6}>
              <Form.Group controlId="formFileLg" className="mb-3">
                {/* Caixinha de imagem */}
                <FloatingLabel
                  controlId="floatingInputImagem"
                  label="Envie o link da imagem do usuário"
                  className="mb-3"
                >
                  <Form.Control
                    type="text"
                    placeholder="Envie o link da imagem do usuário"
                    value={imagemUrl}
                    onChange={(e) => {
                      setImagemUrl(e.target.value);
                    }}
                  />
                </FloatingLabel>

                <Image
                  src={imagemUrl == "" ? linkImagem : imagemUrl}
                  rounded
                  width={300}
                  height={300}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Alerta caso haja erro */}
          <Alert variant={alertVariant} className={alertClass}>
            {alertMensagem}
          </Alert>

          {/* Botão para enviar o formulário de cadastro de produto */}
          <Button variant="primary" size="lg" type="submit">
            Cadastrar
          </Button>
        </form>
      </Container>
    </div>
  );
};

export default CadastroUsuario;