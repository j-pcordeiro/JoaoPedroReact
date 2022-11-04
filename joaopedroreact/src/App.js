import React from 'react'
import imgagemEscolhida from './Componentes/download.jpg'
import ListaProdutos from "./Componentes/listaProdutos";
import Banner from "./banner.css";

const App = () => {
    return ( 
    <>
        <Banner textoCabecalho="No céu tem pão?"/>
        <img src={imgagemEscolhida}/>
            
        <ListaProdutos />
   
    </>
        )
}

export default App;


