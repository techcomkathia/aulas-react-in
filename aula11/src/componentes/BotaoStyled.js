import styled from "styled-components"

// ATIVIDADE 1  (Criação de um Styled Component Simples)

// Crie um componente funcional em React chamado BotaoStyled usando 
// Styled Components. Estilize o botão para ter :

// - cor de fundo #145e87;
// - texto branco ,  tamanho 14, bolder;
// - borda de 2px solida e roxa;
// - borda arredondada de 10px;
// - distanciamento interno da borda 10px;

export const Botao= styled.button`
background-color: ${props => props.ehPrimario? 'green':'#145e87'} ;
color: white;
font-size: 14px;
font-weight: bolder;
border: ${props => props.ehPrimario? '4px solid purple' : '2px solid purple'};
/* border: 2px solid purple; */
border-radius: 10px;
/* padding:10px; */
padding: ${props => props.ehPrimario? '20px' : '10px'};
text-transform: ${props => props.ehPrimario? 'uppercase' : 'none'};
`

// ATIVIDADE 2 (Estilização Condicional)

// Modifique o componente BotaoStyled para aceitar uma propriedade 
// booleana chamada ehPrimario. Se ehPrimario for verdadeiro, o botão deve ter:

// - cor de fundo verde;
// - uma borda adicional de 2 pixels;
// - texto todo em maiúsculo;
// - distancia interna da borda de 20px;