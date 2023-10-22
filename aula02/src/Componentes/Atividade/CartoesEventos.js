const  shows=[
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
]

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
    return(
        <div style={style.container}>
            {shows.map((item)=>{
                return(
                    <div style={style.cartao}>
                        <img style={style.imagem} src={item.url}/>
                        <h2 style={style.titulo}>{item.nome}</h2>
                        <h3 style={style.data}>{item.data}</h3>

                    </div>    
                )
            })
            }
        </div>
    )
}