import { useState } from 'react';
import './App.css';

import { EventosContexto, listaTodosEventos } from './componentes/EventosContexto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraNavegacao from './componentes/barraNavegacao';
import HomePage from './Pages/HomePage';
import CadastrarEventoPage from './Pages/CadastrarEventoPage';
import Carrinho from './Pages/Carrinho';



function App() {
  
  let [todosEventos, setEvento] = useState(listaTodosEventos)
  let [carrinho, setCarrinho] = useState([{nome:'um'}])
      
    return (
    <div className="App">
     
      <EventosContexto.Provider value={{todosEventos, setEvento, carrinho, setCarrinho}}>
        <BrowserRouter>
          <BarraNavegacao/>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/cadastar-evento' element={<CadastrarEventoPage/>} />
            <Route path='/carrinho' element={<Carrinho/>}/>
          </Routes>    
        </BrowserRouter>   
      </EventosContexto.Provider>
    </div>
  );
}

export default App;
