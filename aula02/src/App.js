import './App.css';
import PrimeiroComponente from './Componentes/Exemplos/PrimeiroComponente';
import SegundoComponente from './Componentes/Exemplos/SegundoComponente';
import TerceiroComponente from './Componentes/Exemplos/TerceiroComponente';
import QuartoComponente from './Componentes/Exemplos/QuartoComponente';
import TesteRender from './Componentes/Exemplos/QuintoComponente';

function App() {

  // array de objetos para renderização de listas
  let alunos = [
    {matricula: 1, nome: "Ana", curso: "DFS"},
    {matricula: 2, nome: "Celso", curso: "Design"},
    {matricula: 3, nome: "Mário", curso: "Fotografia"}
  ];

  // retorno com componentes/ JSX
  return (
    <div className="App">
      <PrimeiroComponente/>
      
      <SegundoComponente> Texto inserido dentro do SegundoComponente </SegundoComponente>

      <SegundoComponente>Outro texto inserido dentro do SegundoComponente</SegundoComponente> 

      <TerceiroComponente nome="Káthia" idade="28"/>

      <QuartoComponente/>

      {TesteRender('professor')}
      {TesteRender('Gerente')}
      {TesteRender('programador')}

      {/*Renderização de listas*/}
      <ul>
      {/*Criação dos li com base em um array*/}
      {alunos.map((aluno)=>{
          {/*Key - Necessária para que o React consiga mapear os elementos e atualizar de maneira correta a pelo virtual DOM*/}
          <li key= {aluno.matricula}>{aluno.nome} - {aluno.curso}</li>
        })
      }
      </ul>

      {/*Criação de cards*/}
      {alunos.map((aluno) =>
        <div className="divAluno"
        key={aluno.matricula} style={{border: "1px solid black", width:"400px"}}>
          <p>Matricula: {aluno.matricula}</p>
          <p>Nome: {aluno.nome}</p>
          <p>Curso: {aluno.curso}</p>          
        </div>
      )}

    </div>
  );
}

export default App;
