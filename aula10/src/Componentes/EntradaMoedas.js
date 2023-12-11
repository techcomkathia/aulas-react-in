// EntradaMoedas.js
import React, { useState, useContext } from 'react';
import { ConversorMoedasContext } from './ConversorMoedasContexto';

export function EntradaMoedas() {
  const { real, setReal } = useContext(ConversorMoedasContext);
  const [moeda, setMoeda] = useState(0);

  function handleChange(e) {
    setMoeda(Number(e.target.value));
  }

  function handleClick(e) {
    e.preventDefault();
    setReal(moeda);
  }

  return (
    <form>
      <h1>Conversor de Moedas</h1>
      <p>Digite o valor em reais que deseja converter</p>
      <input
        placeholder="Digite o valor em R$:"
        type="number"
        onChange={(e) => handleChange(e)}
      ></input>
      <br />
      <button onClick={(e) => handleClick(e)}>Converter</button>
      </form>
  );
}
