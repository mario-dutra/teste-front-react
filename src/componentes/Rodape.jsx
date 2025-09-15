import React from "react";



export default function Rodape(){
    return(

        <div className="rodape">
    
            <div className="atendimento">
                <div className="central-vendas">
                   <h1 className="t-central-vendas"> CENTRAL DE VENDAS</h1>
                    <p className="t-atendimento">compre pelo wattsapp<img className="logo-icones" src="../img/whatsapp.png"/></p> 
                </div>
                 <div className="central-atendimento">
                 <h1 className="t-central-vendas">    CENTRAL DE ATENDIMENTO</h1>
                    <b className="t-atendimento">(086) 1234-5678</b>
                    <p className="t-atendimento">fale pelo wattsapp<img className="logo-icones" src="../img/whatsapp.png"/></p> 
                 </div>
            </div>

            <div className="redes-sociais">
                <h1 className="t-redes-sociais">ACOMPANHE NAS REDES SOCIAIS</h1>
                <img img className="logo-icones" src="../img/facebook.png"/>     <img img className="logo-icones" src="../img/instagram.png"/>     <img img className="logo-icones" src="../img/youtube.png"/>
            </div>
            
        </div>
    )
}