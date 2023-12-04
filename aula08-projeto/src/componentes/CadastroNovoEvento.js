import { useContext, useState } from "react"
import { EventosContexto } from "./EventosContexto"
import { style } from "./EventosStyle"


export function CadastroNovoEvento() {
    const { todosEventos, setEvento } = useContext(EventosContexto);

    // Criação dos dados no novoEvento
    const [novoEvento, setNovoEvento] = useState({
        nome: "",
        data: "",
        url: "",
        qtd:""
    });

    const [mensagemSucesso, setMensagemSucesso]= useState('')

    function handleInputChange(event) {
        const { name, value } = event.target;
        setNovoEvento({ ...novoEvento, [name]: value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        // Adicionar novo evento à lista
        setEvento([...todosEventos, { id: todosEventos.length + 1, ...novoEvento }]);
        // Limpar o formulário
        setNovoEvento({
            nome: "",
            data: "",
            url: "",
            qtd:""
        });
        setMensagemSucesso('Evento Criado com sucesso')
    }

    return (
        <div style={style.container}>
          <form style={style.formulario} onSubmit={handleSubmit}>
            <label >
              Nome:
              <input
                type="text"
                name="nome"
                value={novoEvento.nome}
                onChange={handleInputChange}
                style={style.input}
              />
            </label>  
              
            
            <br />
            
            <label>
              Data:
              <input
                type="text"
                name="data"
                value={novoEvento.data}
                onChange={handleInputChange}
                style={style.input}
              />
            </label>
            <br />
            <label>
              URL da Imagem:
              <input
                type="text"
                name="url"
                value={novoEvento.url}
                onChange={handleInputChange}
                style={style.input}
              />
            </label>
            <br />
            <label>
              Quantidade ingressos:
              <input
                type="number"
                name="qtd"
                value={novoEvento.url}
                onChange={handleInputChange}
                style={style.input}
              />
            </label>
            <br/>
            <button type="submit" style={style.button}>
              Adicionar Evento
            </button>
            <p>{mensagemSucesso}</p>
          </form>
        </div>
      );
}
