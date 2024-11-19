import React from 'react'
import CardProduto from '../components/CardProduto'

const Home = () => {
  const produtos = [
    {id: 1, 
      nome:"Shampoo", 
      descricao:"Não Pode Comer", 
      preco:"7,50", 
      categoria:"Saúde e Beleza", 
      imagemUrl:"https://m.media-amazon.com/images/I/81YvIkHie-L.jpg"},

    {id: 2, 
      nome:"Batedeira mágica", 
      descricao:"Faz tudo o que você quiser.", 
      preco:"449,90", 
      categoria:"Eletrõnicos",
      imagemUrl:"https://m.media-amazon.com/images/I/71a-aiH-n+L.jpg"},

    {id: 3, 
      nome:"Lancheira Carlos", 
      descricao:"Você é a velocidade", 
      preco:"11,50", 
      categoria:"Bolsa", 
      imagemUrl:"https://lojabagaggio.vtexassets.com/arquivos/ids/2323583/0152511651001---LANCHEIRA-CARROS-23K--1-.jpg?v=638049795743100000"}
  ]


  return (
    <div>
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
