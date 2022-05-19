import React from 'react';
import { mdiCarBrakeFluidLevel } from '@mdi/js';
import Icon from "@mdi/react";
import 'animate.css';
import Start from './start/Start'




const Inicio = (props) => {
    const alteraTela = props.alteraTela;

   
    return ( 
       
            <div id='inicio'>
                <section>
                    <div className='start'>
                        <ul>
                            <li onClick={()=>  alteraTela(<Start alteraTela={alteraTela}/>) } className='botao-start'> START</li>
                        </ul>
                    </div>
                </section>
            </div>
        
     );
}
 
export default Inicio;