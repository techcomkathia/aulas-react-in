import { useState } from "react"

export default function TextoFormulario(){

    let[texto, setTexto] = useState()


    function handleChange(e){
        setTexto(e.target.value)
    }

    return(
        <div>
            <input placeholder="digite um nome" onChange={(e)=> handleChange(e)}></input>
            <p>{texto}</p>
        </div>
    )


}