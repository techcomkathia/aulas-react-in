import React, { useState } from 'react';

const BuscarCep = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [erro, setErro] = useState('');

  const buscarEndereco = async () => {
    try {
      // Realiza a requisição à API de consulta de CEP
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error('Não foi possível obter o endereço. Verifique o CEP inserido.');
      }
      // Converte a resposta para JSON
      const data = await response.json();
      // Atualiza o estado com o endereço
      setEndereco(data.logradouro || 'Endereço não encontrado');
    } catch (error) {
      // Em caso de erro, define o erro no estado
      setErro(error.message);
      setEndereco('');
    }
  };

  return (
    <div>
      <label>
        Insira o CEP:
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          maxLength="8"
        />
      </label>
      <button onClick={buscarEndereco}>Buscar</button>

      {endereco && <p>CEP Completo: {cep}</p>}
      {endereco && <p>Endereço: {endereco}</p>}
      {erro && <p style={{ color: 'red' }}>{erro}</p>}
    </div>
  );
};

export default BuscarCep;
