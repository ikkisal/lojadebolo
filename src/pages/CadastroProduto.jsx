//Importando componentes do bootstrap
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';
import Image from 'react-bootstrap/Image';

//Importação de componentes
import NavBar from '../components/NavBar';
import { useState, useEffect } from "react";

const urlCate = "http://localhost:5000/cats"
const urlProd = "http://localhost:5000/produtos"

const CadastroProduto = () => {

//Lista com categorias
    const [cats, setCategorias] = useState([]);
    useEffect(() =>{
      async function fetchData(){
        try{
          const req = await fetch(urlCate)
          const cats = await req.json()
          console.log(cats)
          setCategorias(cats)
        }
        catch(erro){
          console.log(erro.message)
        }
      }
      fetchData()
    }, [])

    //Link produto sem imagem
    const linkImagem = "https://multilit.com.br/wp-content/uploads/2020/03/Produto-sem-foto.png"

    //Variaveis para o produto

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [categoria, setCategoria] = useState("")
    const [preco, setPreco] = useState("")
    const [imagemUrl, setImagemUrl] = useState("")

    //Variaves para o alerta

    const[alertClass, setAlertClass] = useState("mb-3 d-done");
    const[alertMensagem, setAlertMensagem] = useState("");
    const[alertVariant, setAlertVariant] = useState("danger");

    //Função para lidar com recarregamento da pagina

    const handleSubmit = async (e) => {
      e.preventDefault();

      if(nome != ""){
        if(descricao != ""){
          if(preco != ""){
            const produto = {nome, descricao, categoria, preco, imagemUrl};
            console.log(produto);
            try{
              const req = await fetch(urlProd, {
                method:"POST",
                headers: {"Content-type": "application/json"},
                body:JSON.stringify(produto),
              });
              const res = req.json()
              console.log(res);
              setAlertClass("mb-3 mt-2");
              setAlertVariant("sucess");
              setAlertMensagem("Produto cadastrado com sucesso");
              alert("Produto efetuado com sucesso")
            }
            catch(error){
              console.log(error)
            }
          }
          else{
            setAlertClass("mb -3 mt-2")
            setAlertMensagem("O campo do preço não pode estar vazio")
          }
        }else{
          setAlertClass("mb -3 mt-2")
          setAlertMensagem("O campo descrição não pode estar vazio")
        }
      }else{
        setAlertClass("mb -3 mt-2")
        setAlertMensagem("O campo nome não pode estar vazio")
      }
    }

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Cadastrar Produtos</h1>
        <form className="mt-3" onSubmit={handleSubmit}>
            <Row>
                <Col xs={6}>

                {/* Caixa de nome */}
                    <FloatingLabel 
                    controlId="floatingInputNome" 
                    label="Nome" 
                    className="mb-3">

                    <Form.Control type="text" 
                    placeholder="Digite o nome do produto" 
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    />
                    </FloatingLabel>

                    {/* Caixa de descrição */}
                    <FloatingLabel 
                    controlId="floatingInputDescricao" 
                    label="Descrição" 
                    className="mb-3">

                    <Form.Control type="text" 
                    placeholder="Digite a descrição do produto" 
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                    />
                    </FloatingLabel>


                    {/* Select de categorias */}
                    <Form.Group 
                    controlId="formGridState" 
                    className="mb-3">
                        <Form.Label>Tipo de Produto</Form.Label>
                        <Form.Select 
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                        >

                           {cats.map((cat)=>(
                            <option key={cat.id} value={cat.nome}>
                                    {cat.nome}
                            </option>
                           ))}

                        </Form.Select>
                    </Form.Group>
                        {/* Caixa de preço */}
                        <FloatingLabel 
                        controlId="floatingInputPreco" 
                        label="Preço" 
                        className="mb-3">

                     <Form.Control 
                        type="number"
                        step={0.1} 
                        placeholder="Digite o nome do produto" 
                        value={preco}
                        onChange={(e) => setPreco(e.target.value)}
                        />
                    </FloatingLabel>

        
                </Col>

                <Col xs={6}>
                <Form.Group controlId="FromFileLg" className="mb-3">
                <FloatingLabel 
                    controlId="floatingInputImagem" 
                    label="Envie o link da imagem do produto" 
                    className="mb-3">

                    <Form.Control 
                    type="text" 
                    placeholder="Envie o link da imagem do produto" 
                    value={imagemUrl}
                    onChange={(e) => {
                      setImagemUrl(e.target.value)
                    }}
                    />
                    </FloatingLabel>

                    <Image 
                      src={imagemUrl == "" ? linkImagem : imagemUrl} 
                      rounded width={300} 
                      height={300}/>
                </Form.Group>
                </Col>
            </Row>

          {/* Alerta caso haja erro */}
        <Alert variant={alertVariant} className={alertClass}>
                 {alertMensagem}
            </Alert>

            {/* Botão para enviar formulário */}
            <Button variant="primary" size="lg" type="submit">
                    Cadastrar       
            </Button>
        </form>
      </Container>
    </div>
  )
}

export default CadastroProduto
