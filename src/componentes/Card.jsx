import React from "react";


export default function Card(){


  function esquerda (){
    var direcao =  document.getElementById('contentSlide')
   
 //esquerda
 direcao.scrollLeft = direcao.scrollLeft -500;

    

  }



    function direita (){
    var direcao =  document.getElementById('contentSlide')
    
 //direita
 direcao.scrollLeft = direcao.scrollLeft +500;

    

  }

  

//  function direcao(e){
//const direcao = document.getElementById("contentSlide");

// if(e == 1){

 //esquerda
// direcao.scrollLeft = direcao.scrollLeft - 500;

// }else if(e == 2){

 //direita

// direcao.scrollLeft = direcao.scrollLeft + 500;
// }

//}

    return(
        <div>
       <div className="ofertas">Saldão de Ofertas</div>
          <div id="btn-left" onClick={esquerda}>    <img src="../img/direito.png"/>  </div>

    <div id="contentSlide">
 
 <div id="block">

 <img src="../img/cama.png" alt="" className="img-block"/>
 <div className="descricao">
<p className="titulo-produto">Roupeiro</p>
de <b className="preco-desconto">R$950 </b><b>por R$ 350,00</b>
 </div>

 </div>

 <div id="block">

 <img src="../img/fogao.png" alt="" className="img-block"/>
 <div className="descricao">
<p className="titulo-produto">Fogão Esmaltec</p>
de <b className="preco-desconto">R$950 </b><b>por R$ 350,00</b>
 </div>

 </div>

  <div id="block">

 <img src="../img/cadeira.png" alt="" className="img-block"/>
 <div className="descricao">
<p className="titulo-produto">Conjunto Cadeiras</p>
de <b className="preco-desconto">R$950 </b><b>por R$ 350,00</b>
 </div>

 </div>

   <div id="block">

 <img src="../img/geladeira.png" alt="" className="img-block"/>
 <div className="descricao">
<p className="titulo-produto">Conjunto Cadeiras</p>
de <b className="preco-desconto">R$950 </b><b>por R$ 350,00</b>
 </div>

 </div>

   <div id="block">

 <img src="../img/roupeiro.png" alt="" className="img-block"/>
 <div className="descricao">
<p className="titulo-produto">Conjunto Cadeiras</p>
de <b className="preco-desconto">R$950 </b><b>por R$ 350,00</b>
 </div>

 </div>

<div id="block">

 <img src="../img/escrivaninha.png" alt="" className="img-block"/>
 <div className="descricao">
<p className="titulo-produto">Conjunto Cadeiras</p>
de <b className="preco-desconto">R$950 </b><b>por R$ 350,00</b>
 </div>

 </div>

<div id="block">

 <img src="../img/comoda2.png" alt="" className="img-block"/>
 <div className="descricao">
<p className="titulo-produto">Conjunto Cadeiras</p>
de <b className="preco-desconto">R$950 </b><b>por R$ 350,00</b>
 </div>

 </div>

    </div>

      <div id="btn-right" onClick={direita}> <img src="../img/esquerdo.png"/>  </div>
</div>
    )
}

