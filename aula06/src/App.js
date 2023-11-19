import './App.css';
import Funcionario, { CadastroFuncionario } from './Componentes/Funcionarios';
import TextoFormulario from './Componentes/Formulario.js'
import BuscarCep from './Componentes/BuscarCep';


function App() {
  return (
    <div className="App">
      <Funcionario nome='Káthia' email='kathia@email.com' telefone= '81 9999-9999'></Funcionario>
      <TextoFormulario/>
      <CadastroFuncionario></CadastroFuncionario>
      <BuscarCep></BuscarCep>
    </div>    
  );
}

export default App;
