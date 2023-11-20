import './App.css';
import ConversorMoedas from './componentes/atividade/ConversorMoedas';
import { Button } from './componentes/exemplos/Button.style';
import { ButtonColor } from './componentes/exemplos/ButtonColor.style';
import { ButtonRound } from './componentes/exemplos/ButtonRound.style';



function App() {
  return (
    // <div className="App">
      <header className="App-header">
          <ConversorMoedas/>
          <Button>Meu botão estilizado</Button>
          <ButtonColor backColor='pink' hoverColor='green'> Meu botão estilizado com props</ButtonColor>
          <ButtonColor backColor='yellow' > Meu botão sem cor de hover</ButtonColor>
          <ButtonRound>Botao arredondado</ButtonRound>
      </header>
    // </div>
  );
}

export default App;
