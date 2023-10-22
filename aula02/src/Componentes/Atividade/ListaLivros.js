import React from 'react';

const livros = [
     {
        id: 1,
        nome: "O Código Da Vinci",
        autor: "Dan Brown",
        ano: 2003,
        preço: 34.99,
        quantidade: 0
      },
      {
        id: 2,
        nome: "Anjos e Demônios",
        autor: "Dan Brown",
        ano: 2000,
        preço: 29.99,
        quantidade: 5
      },
      {
        id: 3,
        nome: "Inferno",
        autor: "Dan Brown",
        ano: 2013,
        preço: 37.99,
        quantidade: 2
      },
      {
        id: 4,
        nome: "O Símbolo Perdido",
        autor: "Dan Brown",
        ano: 2009,
        preço: 32.99,
        quantidade: 4
      },
      {
        id: 5,
        nome: "Origem",
        autor: "Dan Brown",
        ano: 2017,
        preço: 39.99,
        quantidade: 1
      }
];

// Função para renderizar o título do livro
function InformacoesLivro(livro) {
  return (
    <div key={livro.id}>
      <h3>{livro.nome}</h3>
      <ul>
        <li>Autor: {livro.autor}</li>
        <li>Ano: {livro.ano}</li>
        <li>Preço: R$ {livro.preço.toFixed(2)}</li>
        {MensagemEstoque(livro)}
      </ul>
    </div>
  );
}

// Função para renderizar a mensagem de estoque
function MensagemEstoque(livro) {
  if (livro.quantidade === 0) {
    return <li> <strong>Fora do estoque</strong></li>;
  } else if (livro.quantidade === 1) {
    return <li> <strong>Última unidade</strong></li>;
  }
  return null; // Retorna null se a quantidade for maior que 1
}

function ListaLivros() {
  return (
    <div>
      {livros.map((livro) => (
        <div>
          {InformacoesLivro(livro)}
        </div>
      ))}
    </div>
  );
}

export default ListaLivros;
