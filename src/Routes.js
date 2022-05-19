import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,} from "react-router-dom";

import Inicio from './components/Inicio.js';
import Start from './components/start/Start';


const Routess = () => {
    return ( 
        <Router>
    <Routes>
      <Route path="/" exact component element={<Inicio />}>
      <Route path="/start"  component={<Start/>}/>
      </Route>
    </Routes>
  </Router>
     );
}
 
export default Routess;