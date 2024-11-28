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

// Importção do useState e useEffect
import { useState, useEffect } from "react";

// importação do Navigate
import {useNavigate} from "react-router-dom"

const url = "http://localhost:5000/cats";

const EditarProduto = () => {

    //Lista com categorias
    const cats = [
        {"id": 1, "nome": "Bolos"},
        {"id": 2, "nome": "Doces"},
        {"id": 3, "nome": "Bebidas"},
        {"id": 4, "nome": "Tortas"},
    ]


    //Link produto sem imagem
    const linkImagem = "https://multilit.com.br/wp-content/uploads/2020/03/Produto-sem-foto.png"

  return (
    <div>
      <NavBar />
      <Container>
        <h1>Editar Produtos</h1>
        <form className="mt-3">
            <Row>
                <Col xs={6}>

                {/* Caixa de nome */}
                    <FloatingLabel 
                    controlId="floatingInputNome" 
                    label="Nome" 
                    className="mb-3">

                    <Form.Control type="text" 
                    placeholder="Digite o nome do produto" />
                    </FloatingLabel>

                    {/* Caixa de descrição */}
                    <FloatingLabel 
                    controlId="floatingInputDescricao" 
                    label="Descrição" 
                    className="mb-3">

                    <Form.Control type="text" 
                    placeholder="Digite a descrição do produto" />
                    </FloatingLabel>


                    {/* Select de categorias */}
                    <Form.Group 
                    controlId="formGridState" 
                    className="mb-3">
                        <Form.Label>Tipo de Produto</Form.Label>
                        <Form.Select>

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
                        placeholder="Digite o nome do produto" />
                    </FloatingLabel>

        
                </Col>

                <Col xs={6}>
                <Form.Group controlId="FromFileLg" className="mb-3">
                <FloatingLabel 
                    controlId="floatingInputImagem" 
                    label="Envie o link da imagem do produto" 
                    className="mb-3">

                    <Form.Control type="text" 
                    placeholder="Envie o link da imagem do produto" />
                    </FloatingLabel>

                    <Image src={linkImagem} rounded width={300} height={300}/>
                </Form.Group>
                </Col>
            </Row>

            {/* Alerta caso haja erro */}
            <Alert key="danger" variant="danger">
                 Há um erro
            </Alert>

            {/* Botão para enviar formulário */}
            <Button variant="warning" size="lg" type="submit">
                    Editar       
            </Button>
        </form>
      </Container>
    </div>
  )
}

export default EditarProduto;