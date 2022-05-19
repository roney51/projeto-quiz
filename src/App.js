import React, { useState } from 'react';
import Inicio from './components/Inicio.js';

function App() {
  
    const [tela, alteraTela] = useState(null);

  if(tela == null){
    alteraTela(<Inicio alteraTela={alteraTela}/>)
  }
  return (
    <div>
      {tela}
    </div>
  );
}

export default App;
