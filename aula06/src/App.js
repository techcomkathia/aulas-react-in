import './App.css';
import Funcionario from './Componentes/Funcionarios';
import TextoFormulario from './Componentes/Formulario';


function App() {
  return (
    <div className="App">
      <Funcionario nome='Káthia' email='kathia@email.com' telefone= '81 9999-9999'></Funcionario>
      <TextoFormulario/>
    </div>

    
  );
}

export default App;
