// MoedaGeral.js
import React, { useContext, useEffect, useState } from 'react';
import { ConversorMoedasContext } from './ConversorMoedasContexto';

export function MoedaGeral({ moeda }) {
  const { real, setReal } = useContext(ConversorMoedasContext);
  const [conversao, setConversao] = useState({
    totalConvertido: 0,
    valorCompra: 0,
    valorVenda: 0,
  });

  useEffect(() => {
    const fetchConversao = async () => {
      try {
        // Atualiza o estado de real antes de chamar a API
        setReal((prevReal) => prevReal);

        const response = await fetch(
          `https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`
        );
        const data = await response.json();
        const cotacao = data[`${moeda}-BRL`];
        const totalConvertido = real * cotacao.bid;

        // Atualiza o estado com os dados mais recentes
        setConversao({
          totalConvertido,
          valorCompra: cotacao.bid,
          valorVenda: cotacao.ask,
        });
      } catch (error) {
        console.error('Erro ao buscar dados da API', error);
      }
    };

    fetchConversao();
  }, [real, moeda, setReal]);

  return (
    <div style={{ border: '1px solid red', margin: '5px', padding: '10px' }}>
      <h1>{moeda}</h1>
      <p>Valor Total Convertido: R${conversao.totalConvertido.toFixed(2)}</p>
      <p>Valor de Compra (Bid): R${conversao.valorCompra.toFixed(2)}</p>
      <p>Valor de Venda (Ask): R${conversao.valorVenda.toFixed(2)}</p>
    </div>
  );
}
