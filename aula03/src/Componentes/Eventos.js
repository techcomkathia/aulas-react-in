import { useState } from "react"

const style={
    container:{
         display: "flex",
         justifyContent: 'space-between',
         padding: "10px"
     },
     cartao:{
         maxWidth: '300px',
         backgroundColor: "#708090",
         padding: "10px", 
         textAlign: "center",
         borderRadius: "20px"
 
     },
     imagem:{
         margim: "10px", 
         borderRadius: "20px"
     },
     titulo:{
         color: "#113d63",
         textAlign: "center"
     },
     data:{
         color: "#ffffff"
     }
 
     
}

export default function CartoesEventos(){

    let [listaShows, setListaShows]= useState([
        {
            nome: "Festival de Música Lírica Eletônica",
            data: "25/12/2023",
            url: "https://placehold.co/300x200"
        },
        {
            nome: "É o Tchan na Selva: Cover",
            data: "12/10/2023",
            url: "https://placehold.co/300x200"
        },
        {
            nome: "Tributo a Ednaldo Pereira",
            data: "10/08/2023",
            url: "https://placehold.co/300x200"
        }
    ])

    let [novoShow, setNovoShow] = useState({})


    
    const handleSubmit = (event) => {
        event.preventDefault();
        setListaShows([...listaShows, novoShow])
    }

    const handleInputChange= (e)=>{ 
        setNovoShow(novoShow => ({
                ...novoShow,
                [e.target.name]: e.target.value,
            })
        )
    }       

    return(
    <>
        <div style={style.container}>
        <h2>Adicionar Novo Evento</h2>
        <form onSubmit={handleSubmit}>
            <label>Nome</label>
            <input
                type="text"
                name="nome"
                id="nome"
                value={novoShow.nome || ""}
                onChange={handleInputChange}
            />
            <label>Data</label>
            <input
                type="text"
                name="data"
                id="data"
                value={novoShow.data || ""}
                onChange={handleInputChange}
            />
            <label>Url</label>
            <input
                type="text"
                name="url"
                id="url"
                value={novoShow.url || ""}
                onChange={handleInputChange}
            />
            <button type="submit">
                Adicionar Evento
            </button>
        </form>
      </div>
      <div style={style.container}>
            {listaShows.map((item, index)=>{
                return(
                    <div style={style.cartao} key={index}>
                        <img style={style.imagem} src={item.url}/>
                        <h2 style={style.titulo}>{item.nome}</h2>
                        <h3 style={style.data}>{item.data}</h3>

                    </div>    
                )
            })
            }
        </div>
    </>
  );
}
    