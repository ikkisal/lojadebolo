import React from 'react'
import CardProduto from '../components/CardProduto'

//Importação de componentes
import NavBar from '../components/NavBar';

// importar o hook useState para monitorar a mudança das variaveis
import { useState, useEffect } from "react";

//URL da API
const url = "http://localhost:5000/produtos"

const Home = () => {
  const [produtos, setProdutos] = useState([])

  // useEffect pra puxar os dados da api
  useEffect(() =>{
    async function fetchData(){
      try{
        const req = await fetch(url)
        const prods = await req.json()
        console.log(prods)
        setProdutos(prods)
      }
      catch(erro){
        console.log(erro.message)
      }
    }
    fetchData()
  }, [produtos])


  return (
    <div>
      <NavBar />
      <h1>Lista de Produtos</h1>
      <div className='lista-produtos d-flex col-12 gap-3 mt-3 justify-content-center flex-wrap'>

        {/* Card com informações fixas */}
        <CardProduto 
        id="1" nome="Shampoo" 
        descricao="Não Pode Comer" 
        preco="7,50"
        categoria="Saúde e Beleza" 
        imagemUrl="https://m.media-amazon.com/images/I/81YvIkHie-L.jpg"
        />
        
        {/* Card com informações variaveis */}
        {produtos.map((prod)=>
          <CardProduto 
          key={prod.id}
          id={prod.id} 
          nome={prod.nome} 
          descricao={prod.descricao} 
          preco={prod.preco} 
          categoria={prod.categoria} 
          imagemUrl={prod.imagemUrl}/>
        )}
        
      </div>
    </div>
  )
}

export default Home
