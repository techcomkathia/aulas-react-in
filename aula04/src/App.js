import logo from './logo.svg';
import './App.css';
import { DadosAluno } from './componentes/exemplos/DadosAluno';
import Calculadora from './componentes/exemplos/Calculadora';
import ContadorSegundos from './componentes/exemplos/ContadorSegundos';
import ConsumindoServico from './componentes/exemplos/ChamadaApi';
import ChamadaApi from './componentes/exemplos/ChamadaApi';
import Shows from './componentes/atividade/Shows';

function App() {
  return (
    <div className="App">
      <Calculadora></Calculadora>
      <DadosAluno></DadosAluno>
      {/* <ContadorSegundos></ContadorSegundos> */}
      <ChamadaApi></ChamadaApi>
      <Shows></Shows>

      
    </div>
  );
}

export default App;
