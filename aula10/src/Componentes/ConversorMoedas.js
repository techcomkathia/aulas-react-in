// ConversorMoedas.js
import React, { useState, createContext } from 'react';
import { ConversorMoedasContext } from './ConversorMoedasContexto';
import { EntradaMoedas } from './EntradaMoedas';
import { MoedaGeral } from './MoedaGeral';

export default function ConversorMoedas() {
  const [real, setReal] = useState(0);

  return (
    <>
      <ConversorMoedasContext.Provider value={{ real, setReal }}>
        <EntradaMoedas />
        <MoedaGeral moeda="USD" />
        <MoedaGeral moeda="EUR" />
        <MoedaGeral moeda="ARS" />
      </ConversorMoedasContext.Provider>
    </>
  );
}
