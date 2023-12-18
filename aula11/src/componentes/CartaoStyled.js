// ATIVIDADE 3 (Reutilização de estilos)

// Crie dois componentes React, CartaoInfo e CartaoAlerta, usando
// Styled Components. Ambos devem compartilhar estilos comuns 
// originárias de um outro componente (CartaoGenerico)

// CartaoGenerico:
// - borda solida cinza 1px;
// - bordas arredondadas de 10px
// - afastamento externo de 10px;
// - display flexível;
// - organização em coluna;

// CartaoInfo:
// - distanciamento interno da borda de 10px;
// - cor de fundo : #e3f5e0
// - borda :
//           apenas no topo 
//           30px de espessura
//           cor  #0c5e01

// CartaoAlerta:
// - distanciamento interno da borda de 10px;
// - cor de fundo : #fea1b6
// - borda :
//           apenas na base
//           40px de espessura
//           cor  #b20027

import React from 'react';
import styled from 'styled-components';

// Componente base comum a ambos os cartões
const CartaoGenerico = styled.div`
  border: 1px solid gray;
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`

// Componente CartaoInfo que estende CartaoGenerico
const CartaoInfo = styled(CartaoGenerico)`
  padding: 10px;
  background-color: #e3f5e0;
  border-top: 30px solid #0c5e01;
`

// Componente CartaoAlerta que estende CartaoGenerico
const CartaoAlerta = styled(CartaoGenerico)`
  padding: 10px;
  background-color: #fea1b6;
  border-bottom: 40px solid #b20027;
`
