import { useState } from "react"

export default function TextoFormulario(){

    let[texto, setTexto] = useState()
    let[textoParagrafo, setTextoParagrafo]= useState('')


    function handleChange(e){
        setTexto(e.target.value)
    }

    function handleClick(){
        setTextoParagrafo(texto)
    }

    return(
        <div>
            <input placeholder="digite um nome" onChange={(e)=> handleChange(e)}></input>
            <button onClick={handleClick}>Clique para exibir</button>
            <p>{texto}</p>
            <p>{textoParagrafo}</p>
        </div>
    )


}