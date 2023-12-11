import { useEffect, useState } from 'react';

export default function Filmes() {
    const [generos, setGeneros] = useState([]);
  const [filmesPorGenero, setFilmesPorGenero] = useState([]);
  const [generoSelecionado, setGeneroSelecionado] = useState(null);
  const apiKey = 'b4b5f9d98442f11bbdd50a5adf70f1d1';
  const linguagem = 'pt-BR';
  
  async function buscarGeneros() {
    try {
      const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=${linguagem}`;
      const resposta = await fetch(url);

      if (!resposta.ok) {
        throw new Error('Erro ao buscar os gêneros');
      }

      const dados = await resposta.json();
      setGeneros(dados.genres);
      console.log(dados);
    } catch (error) {
      console.error('Ocorreu um erro ao carregar os gêneros:', error.message);
    }
  }

  async function buscarFilmesPorGenero(genero) {
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=${linguagem}&with_genres=${genero.id}`;
      const resposta = await fetch(url);

      if (!resposta.ok) {
        throw new Error('Erro ao buscar os filmes por gênero');
      }

      const dados = await resposta.json();
      setFilmesPorGenero(dados.results);
    } catch (error) {
      console.error('Ocorreu um erro ao carregar os filmes por gênero:', error.message);
    }
  }

  useEffect(() => {
    buscarGeneros();
  }, []);

  useEffect(() => {
    if (generoSelecionado !== null) {
      buscarFilmesPorGenero(generoSelecionado);
    }
  }, [generoSelecionado]);

  if (generoSelecionado !== null) {
    return (
      <div className="App">
        <h1>Gêneros:</h1>
        <ul>
          {generos.map(genero => (
            <li style={{ listStyle: 'none' }} key={genero.id}>
              <button onClick={() => setGeneroSelecionado(genero)}>{genero.name}</button>
            </li>
          ))}
        </ul>

        <div>
          <h2>Filmes de {generoSelecionado.name}:</h2>
          <ul>
            {filmesPorGenero.map(filme => (
              <li key={filme.id}>
                <h2>{filme.title}</h2>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <h1>Gêneros:</h1>
        <ul>
          {generos.map(genero => (
            <li style={{ listStyle: 'none' }} key={genero.id}>
              <button onClick={() => setGeneroSelecionado(genero)}>{genero.name}</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}