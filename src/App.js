import  './Quiz.css';
import React, {useState} from 'react';
import Apresentacao from './Apresentacao';

function App() {
 
  const[ tela, alteraTela ] = useState(null);
  require("./App.css")
  if(tela == null){
    alteraTela(<Apresentacao alteraTela={alteraTela}/>);
  }
 
 
  require("./Quiz.css")
  return (

    <div className="corpo">

    {tela}
    
    </div>
  );
}

export default App;
