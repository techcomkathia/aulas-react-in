import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Estado para armazenar os gêneros
  const [generos, setGeneros] = useState([]);

  // Função para buscar os gêneros da API
  async function buscarGeneros() {
    try {
      const apiKey = 'b4b5f9d98442f11bbdd50a5adf70f1d1';
      const linguagem = 'pt-BR';
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${linguagem}`;

      const resposta = await fetch(url);

      if (!resposta.ok) {
        throw new Error('Erro ao buscar os gêneros');
      }

      const dados = await resposta.json();
      setGeneros(dados.genres);
      console.log(generos)
    } catch (error) {
      console.log('Ocorreu um erro ao carregar os gêneros:', error.message);
    }
  }

  // Efeito para buscar os gêneros ao montar o componente
  useEffect(() => { buscarGeneros() }, []);

  // Renderização dos gêneros
  return (
    <div className="App">
      <h1>Gêneros:</h1>
      <ul>
        {generos.map(genero => (
          <li style={{listStyle:'none'}} key={genero.id}><button>{genero.name}</button></li>
        ))}
      </ul>
    </div>
  );
}

export default App;