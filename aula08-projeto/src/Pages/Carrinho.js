import { useContext } from "react"
import { EventosContexto } from "../componentes/EventosContexto"
import { style } from "../componentes/EventosStyle";

export default function Carrinho(){
    let {carrinho} = useContext(EventosContexto)
    
    return (
        <div>
          <h1>Carrinho</h1>
          {carrinho.map((item, index) => {
            return (
              <div key={index} style={style.carrinhoItem}>
                <p>{item.nome}</p>
              </div>
            );
          })}
        </div>
      );
    
}