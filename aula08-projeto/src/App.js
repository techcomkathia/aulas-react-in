import { useState } from 'react';
import './App.css';
import { EventosContexto, listaTodosEventos } from './componentes/EventosContexto';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BarraNavegacao from './componentes/barraNavegacao';
import Home from './Pages/HomePage';
import HomePage from './Pages/HomePage';
import CadastrarEventoPage from './Pages/CadastrarEventoPage';



function App() {
  
  let [todosEventos, setEvento] = useState(listaTodosEventos)
      
    return (
    <div className="App">
     
      <EventosContexto.Provider value={{todosEventos, setEvento}}>
        <BrowserRouter>
          <BarraNavegacao/>
          <Routes>
            <Route index element={<HomePage/>}/>
            <Route path='/cadastar-evento' element={<CadastrarEventoPage/>} />
          </Routes>    
        </BrowserRouter>   
      </EventosContexto.Provider>
    </div>
  );
}

export default App;
