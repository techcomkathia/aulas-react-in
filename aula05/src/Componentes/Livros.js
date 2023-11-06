import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

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

function InformacoesLivro({ livro }) {
  const navigate = useNavigate();

  const handleDetalhesClick = () => {
    navigate(`/livro/${livro.id}`);
  };

  return (
    <div key={livro.id} onClick={handleDetalhesClick} style={{ cursor: 'pointer' }}>
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

function MensagemEstoque(livro) {
    if (livro.quantidade === 0) {
        return <li> <strong>Fora do estoque</strong></li>;
    } else if (livro.quantidade === 1) {
        return <li> <strong>Última unidade</strong></li>;
    }
    
    return null; // Retorna null se a quantidade for maior que 1
    
}

function DetalhesLivro() {
  const { id } = useParams();
  const livro = livros.find((livro) => livro.id === Number(id));

  if (!livro) {
    return <div>Livro não encontrado.</div>;
  }

  return (
    <div>
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

function ListaLivros() {
  return (
    <div>
      {livros.map((livro) => (
        <InformacoesLivro key={livro.id} livro={livro} />
      ))}
    </div>
  );
}

export { ListaLivros, DetalhesLivro };
