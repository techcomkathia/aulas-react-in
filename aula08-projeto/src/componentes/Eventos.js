import { useContext, useState } from "react"
import { EventosContexto } from "./EventosContexto"
import { style } from "./EventosStyle"



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
