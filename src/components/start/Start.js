import React from 'react';
import { mdiCarBrakeFluidLevel } from '@mdi/js';
import Icon from "@mdi/react";
import 'animate.css';
import QuizMain from '../QuizMain';
import QuizMainSeries from '../QuizMainSeries';




const Start = (props) => {

    const alteraTela = props.alteraTela;
    return ( 
        <div id="start">
            <section>
                <h1>ESCOLHA UM QUIZ</h1>
                <div className="serie">
                    <ul>
                        <li onClick={()=>  alteraTela(<QuizMainSeries alteraTela={alteraTela}/>) } className='botao-start'> SÉRIES</li>
                    </ul>
                </div>
                <br>
                </br>
                <div className="desenho">
                <ul>
                    <li onClick={()=>  alteraTela(<QuizMain alteraTela={alteraTela}/>) } className='botao-start'> DESENHOS</li>
                </ul>
                </div>
            </section>
        </div>
     );
}
 
export default Start;