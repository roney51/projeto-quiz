import { useState } from "react";
import React from 'react';
import Final from "./Final";

const Quiz = (props) => {

    const alteraTela = props.alteraTela;

    const [etapa, alteraEtapa] = React.useState(0);

    const [pontos, alteraPontos] = React.useState(0);

    const perguntas = [
        {
            pergunta: "Qual a cor do cavalo Branco de Napoleão?",
            respostas: ["Preto","Branco","Amarelo","Azul"],
            correta: 0
        },
        {
            pergunta: "Quantos mundias tem o Corinthians",
            respostas: ["Um","Dois","Três","Quatro"],
            correta: 1
        },
    ];

    const verificaResposta = (i) =>{
        const resposta_certa = perguntas [etapa].correta;
        if( resposta_certa == i){
            alteraPontos(pontos + 2)
        }


        if(etapa + 1 < perguntas.length){
            alteraEtapa(etapa + 1);
        }else{
            alteraTela(<Final alteraTela={alteraTela}/>)
        }
    }

    return ( 
        <div>
                        <p>Você tem: {pontos} </p>

                        <h1>{perguntas[etapa].pergunta}</h1>
                        <ul>
                        {
                                 perguntas[etapa].respostas.map( (r, i) => {
                                    return <li onClick={()=> verificaResposta(i)}> {r} </li>
                                 })
                            
                        }
                        </ul>
        </div>
     );
}
 
export default Quiz;