import React from 'react'
import imgagemEscolhida from './download.jpg'
import ListaProdutos from "./listaProdutos";

function Navbar()
{
    return(
        <header>
            <img src={imgagemEscolhida}/>
            
            <nav>
                <h3 href="/">Produtos</h3>
                <ListaProdutos />
            </nav>
            
        </header>

    );
}
export default Navbar ;

 