import React, { useEffect, useState } from 'react';

export default function Funcionario(props) {
  return (
    <div style={{ border: '1px solid black', margin: '5px' }}>
      <p> Nome: {props.nome} </p>
      <p> Email: {props.email} </p>
      <p> Telefone: {props.telefone} </p>
    </div>
  );
}

export function CadastroFuncionario() {
  const [Nome, setNome] = useState('');
  const [Email, setEmail] = useState('');
  const [Telefone, setTelefone] = useState('');
  const [listaFuncionarios, setListaFuncionarios] = useState([]);
  const [erro, setErro] = useState(null);

  async function buscarDadosAPI() {
    try {
      // Realiza a requisição à API
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // Verifica se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error('Não foi possível obter os dados da API')
      }
      // Converte a resposta para JSON
      const data = await response.json()
      // Atualiza o estado com os dados
      setListaFuncionarios(data)
    } catch (error) {
      // Em caso de erro, define o erro no estado
      setErro(error.message)
      console.log(erro)
    }
  }

  useEffect(() => {
    buscarDadosAPI();
  }, []);

  function handleClickBotao() {
    setListaFuncionarios([...listaFuncionarios, { nome: Nome, email: Email, telefone: Telefone }]);
    setNome('');
    setEmail('');
    setTelefone('');
  }

  return (
    <div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Nome" value={Nome} onChange={(e) => setNome(e.target.value)} />
          <br />
          <input placeholder="Email" value={Email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <input placeholder="Telefone" value={Telefone} onChange={(e) => setTelefone(e.target.value)} />
          <button onClick={handleClickBotao}>Listar Funcionarios</button>
        </form>

        <div>
            <div>
              <h2>Lista de Funcionários</h2>
              {listaFuncionarios.map((funcionario, index) => (
                <div key={index}>
                  <Funcionario
                    nome={funcionario.name}
                    telefone={funcionario.phone}
                    email={funcionario.email}
                  />
                </div>
              ))}
            </div>          
        </div>
      </div>
    </div>
  );
}
