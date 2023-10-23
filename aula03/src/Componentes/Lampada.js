import { useState } from "react";
import lampadaLigada  from '../download.jpg'
import lampadaDesligada from '../download2.jpg'

export default function Lampada(){
    let [imagem, setImagem]= useState(lampadaLigada)
    let [texto, setTexto]=useState('off')

    function handleClickBotao(){
        if(texto==='off'){
            setTexto('on')
            setImagem(lampadaDesligada)
        }
        else{
            setTexto('off')
            setImagem(lampadaLigada)
        }
    }

    return(
        <>
            <img src={imagem}></img>
            <button onClick={handleClickBotao}>{texto}</button>
        </>
    )
}