import React from "react";


 function Header(){

    return(

       <header id="topo">
        <div className="img-logo">
            <img className="logo" src="public/logo_sa.png" />
        </div>
      

 <div className="box1"> 
        <div className="titulo"><h1 className="titulo_sa">S A MÓVEIS E <b>ELETRO</b></h1></div>
        <div className="pesquisa">
       <input type="name" id="name" placeholder="pesquisar" className="pesquisar"/><input type="submit" id="lupa" value=" " className="botao"/>
        </div>

   </div>  

   <div className="box2"> 
  
    <nav class="navbar navbar-expand-lg navbar-dark">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
 <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
 <ul class="navbar-nav ml-auto">
    <div className="item-categoria">   <li class="nav-item active"><img src="./img/colchao.png"  className="icones"/><b className="menu-icones">COLCHÕES</b></li></div>
      <div className="item-categoria">   <li class="nav-item"><img src="./img/armario-de-cozinha.png"  className="icones"/><b className="menu-icones">ARMÁRIOS</b></li></div>
       <div className="item-categoria">   <li class="nav-item"><img src="./img/comoda.png"  className="icones"/><b className="menu-icones">COMODAS</b></li></div>
        <div className="item-categoria">   <li class="nav-item"><img src="./img/guarda-roupa.png"  className="icones"/><b className="menu-icones">ROUPEIROS</b></li></div>
          <div className="item-categoria">   <li class="nav-item"><img src="./img/mesa-de-jantar.png"  className="icones"/><b className="menu-icones">MESAS</b></li></div>
            <div className="item-categoria">   <li class="nav-item"><img src="./img/eletros.png"  className="icones"/><b className="menu-icones">VENTILADORES</b></li></div>
   </ul>
   </div>
   </nav>
   </div>

       </header>

    )
}

export default Header;
