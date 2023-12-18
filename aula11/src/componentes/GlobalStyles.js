import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Importação de fontes */
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  /* Configurações de cores */
  :root {
    --cor-principal: #3498db;
    --cor-secundaria: #2ecc71;
    --cor-texto: #333;
  }

  /* Reset de estilos */
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Estilos globais */
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: var(--cor-texto);
    background-color: #f2f2f2;
  }

  p {
    color: var(--cor-principal);
    text-decoration: none;
    margin:12px;

    &:hover {
      text-decoration: underline;
    }
  }

  button {
    cursor: pointer;
    padding: 10px 15px;
    background-color: var(--cor-principal);
    color: #fff;
    border: none;
    border-radius: 5px;

    &:hover {
      background-color: var(--cor-secundaria);
    }
  }

`

export default GlobalStyles;