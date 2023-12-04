import { useContext } from "react";
import { EventosContexto } from "./EventosContexto";
import { style } from "./EventosStyle";

export function TodosEventos() {
  let { todosEventos, setEvento, carrinho, setCarrinho } = useContext(EventosContexto);

  function comprarShow(id) {
    const eventoSelecionado = todosEventos.find((evento) => evento.id === id);

    if (eventoSelecionado && eventoSelecionado.qtd > 0) {
      setCarrinho((carrinho) => [...carrinho, eventoSelecionado]);
      setEvento((eventos) =>
        eventos.map((evento) =>
          evento.id === id ? { ...evento, qtd: evento.qtd - 1 } : evento
        )
      );
    }
  }

  return (
    <div style={style.container}>
      {todosEventos.map((item) => (
        <div style={style.cartao} key={item.id}>
          <img style={style.imagem} src={item.url} alt={item.nome} />
          <h2 style={style.titulo}>{item.nome}</h2>
          <h3 style={style.data}>{item.data}</h3>
          <button onClick={() => comprarShow(item.id)} style={style.button}>Adicionar ao carrinho</button>
        </div>
      ))}
    </div>
  );
}
