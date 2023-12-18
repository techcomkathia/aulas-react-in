import { Botao } from "./componentes/BotaoStyled";
import { BotaoEspecial } from "./componentes/BotaoEspecialStyled";
import { ContainerPrincipal } from "./componentes/ContainerPrincipalStyled";
import { ContainerSecundario } from "./componentes/ContainerSecundarioStyled";
import { MeuTitulo } from "./componentes/MeuTituloStyled";

function App() {
  return (
    <ContainerPrincipal>
      <ContainerSecundario>
        <MeuTitulo>Oi! Sou um título com estilo ;)</MeuTitulo>
      </ContainerSecundario>

      <ContainerSecundario>
      <MeuTitulo> :V </MeuTitulo>
      </ContainerSecundario>

      <button>Botão Genérico</button>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

      <ContainerSecundario background='red'>
      <MeuTitulo> :V </MeuTitulo>
      </ContainerSecundario>

      

      <Botao ehPrimario='true'> Primeiro botão estilizado</Botao>
      <BotaoEspecial>Sou especial</BotaoEspecial>
      
    </ContainerPrincipal>
      
     
    
  );
}

export default App;
