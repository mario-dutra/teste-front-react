import React from 'react'
import Header from './componentes/Header'
import Slider from './componentes/Slider'
import ProdutoOferta from './componentes/ProdutoOferta'
import Card from './componentes/Card'
import Eletros from './componentes/Eletros'
import Rodape from './componentes/Rodape'
import './App.css'

function App() {
 

  return (
    
      <div>
       <Header/>
       <Slider/>
       <ProdutoOferta/>
       <Card/>
      <Eletros />
      <Rodape/>
      </div>
  )
}

export default App
