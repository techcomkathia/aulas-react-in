import { useState, useContext} from "react"
import { ConversorMoedasContext } from "./ConversorMoedasContexto"


export function EntradaMoedas(){
    let {real} = useContext(ConversorMoedasContext)
    let {setReal} = useContext(ConversorMoedasContext)
    
    let [moeda, setMoeda] = useState(0)

    function handleChange(e){
        setMoeda(Number(e.target.value))
    }

    function handleClick(e){
        e.preventDefault()
        setReal(moeda)
    }
    return(
        <form>
            <label>Moeda</label>
            <input placeholder="Digite o valor em R$:" type="number" onChange={(e)=>handleChange(e)}></input>
            <button onClick={(e)=>handleClick(e)}>Converter</button>
            <p>{real}</p>
        </form>
    )
}