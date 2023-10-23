import { useState } from "react";
import imagemPerfil  from "../imagemPerfil.jpg"


function InformacoesUser(nome,curso,imagem){
    return(
        <>  
            <img src= {imagem}></img>
            <p>Nome: {nome}</p>
            <p>Curso: {curso}</p>
        </>
    )
}

export default function Formulario(){
    let [nome, setNome]= useState("")
    let [curso, setCurso]= useState("")
    var [imagem, setImagem]= useState(imagemPerfil)
    

    function handleSetNome(e){
        console.log(e.target)
        setNome(e.target.value)
    }

    function handleSetCurso(e){
        setCurso(e.target.value)
    }

    function handleSetImagem(e){
        setImagem(e.target.value)
    }

    return(
        <div >
        
        <div >
            <label from="nome">Nome</label>
            <input type="text" id='nome' onChange={handleSetNome}></input>
            <br/>
            <label from="curso">Curso</label>
            <input type="text" id='curso' onChange={handleSetCurso}></input>
            <br/>
            <label from="imagem">Imagem</label>
            <input type="text" id='imagem' onChange={handleSetImagem}></input>
        </div>

        <div>
            <img src={imagem} alt="imagem" width="200"/>
            <p>Nome: {nome}</p>
            <p>Curso: {curso}</p>

        </div>
        </div>
        
    )

}