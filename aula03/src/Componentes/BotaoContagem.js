import { useState } from "react";

const style={
   botaoAdicionar:{
    color:"#ffffff",
    borderRadius:"20px",
    backgroundColor: "green"
   },
   botaoRemover:{
    color:"#ffffff",
    borderRadius:"20px",
    backgroundColor: "red"    
   },
   numPar:{
    color: '#ffffff',
    backgroundColor:'blue'
   },
   numImpar:{
    color: '#ffffff',
    backgroundColor:'blueviolet'
   }


}

export function BotaoContagem(){
    let [valor, setValor]= useState(1)

    function handleAdicionarValor(){
        setValor(valor+1)
    }

    function handleRemoverValor(){
        if(valor>0){
            setValor(valor-1)
        }
        
    }

    function Numero(){
        if(valor%2===0){
            return <p style={style.numPar}>{valor}</p>
        }else{
            return <p style={style.numImpar}>{valor}</p>
        }
    }

    return(

        <div onMouseOuver={handleAdicionarValor}>
            <button onClick={handleAdicionarValor} style={style.botaoAdicionar}>Adicionar</button>
            <Numero/>
            <button style={style.botaoRemover} onClick={handleRemoverValor}>Remover</button>
        </div>

    )
}