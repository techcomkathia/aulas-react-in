import './App.css'
import { BotaoAlerta } from './Componentes/Alerta';
import Mensagem from './Componentes/Mensagem';
import { useState } from 'react';
import Formulario from './Componentes/Formulario';
import { BotaoContagem } from './Componentes/BotaoContagem';
import Lampada from './Componentes/Lampada';
import CartoesEventos from './Componentes/Eventos';

function App() {
  return (
    <div className="App">
      {/* <BotaoAlerta mensagem="Mensagem personalizada do alerta"> Clique em mim</BotaoAlerta>
      <Mensagem mensagem='Meu texto no console'>Escrever no console</Mensagem> 
      <Formulario/>
      {console.log(useState("meu texto"))}   */}
      <BotaoContagem/>
      <Lampada/>

      <CartoesEventos></CartoesEventos>




    </div>
  );
}

export default App;
