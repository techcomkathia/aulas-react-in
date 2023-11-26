import { useContext, useState } from "react"
import { EventosContexto } from "./EventosContexto"


const style={
    container:{
         display: "flex",
         justifyContent: 'space-evenly',
         padding: "40px",
         flexWrap: 'wrap',
         justifyContent:'center'
     },
     cartao:{
         width: '300px',
         backgroundColor: "#708090",
         padding: "10px", 
         textAlign: "center",
         borderRadius: "20px", 
         margin: '10px'
 
     },
     imagem:{
         margim: "10px", 
         borderRadius: "20px",
         width: "300px"
     },
     titulo:{
         color: "#113d63",
         textAlign: "center"
     },
     data:{
         color: "#ffffff"
     },
     formulario: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // Cor de fundo para o formulário
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Sombra
        justifyContent:'center'
      },
      input: {
        margin: "10px",
        padding: "8px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        width: "100%", // Ocupa 100% da largura do container
        boxSizing: "border-box",
      },
      button: {
        margin: "10px",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#113d63",
        color: "#ffffff",
        cursor: "pointer",
      },
   
     
}


export function TodosEventos(){
    let {todosEventos} = useContext(EventosContexto)
    
    return(
      <div style={style.container}>
          {
              todosEventos.map((item)=>{
                  return(
                      <div style={style.cartao} key={item.id} >
                          <img style={style.imagem} src={item.url} alt={item.nome}/>
                          <h2 style={style.titulo}>{item.nome}</h2>
                          <h3 style={style.data}>{item.data}</h3>
                      </div>
                  
                  )
              })
          }
      </div>
    )
}

export function CadastroNovoEvento() {
    const { todosEventos, setEvento } = useContext(EventosContexto);

    // Criação dos dados no novoEvento
    const [novoEvento, setNovoEvento] = useState({
        nome: "",
        data: "",
        url: ""
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
            url: ""
        });
        setMensagemSucesso('Evento Criado com sucesso')
    }

    return (
        <div style={style.container}>
          <form style={style.formulario} onSubmit={handleSubmit}>
            <label>
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
            <button type="submit" style={style.button}>
              Adicionar Evento
            </button>
            <p>{mensagemSucesso}</p>
          </form>
        </div>
      );
}
