import {createContext, useContext, useEffect, useState} from 'react'


// nossos componentes vão funcionar como uma boneca matrioska
// o componente1 passas as propriedades (estado) para seus filhos
// que passam para seus filhos
// dessa forma o componente5 tem acesso as propriedades do seu "tataravô"

// esses componentes originalmente seriam definidos em arquivos diferentes
// mas para uma melhor compreensão estão todos definidos dentro do arquivo
// do componente pai

const ComponenteContext = createContext(null)

export default function Componente(){
    let [qtdClick, setQtdClick] = useState(0)

    return(
        //estamos usando o .Provider para prover acesso aos valores aos componentes que estão dentro do contexto. 
        // Os valores são passados como objetos para o atributo value
        <>
        <ComponenteContext.Provider value={{qtdClick, setQtdClick}}>
            <Component1/>
            <Componente2></Componente2>
        </ComponenteContext.Provider>
        </>
    )

}

export function Component1(){
    // usando o useContext para trazer as propriedades com seus valores para vairáveis locais 
    let {qtdClick} = useContext(ComponenteContext)
    let {setQtdClick} = useContext(ComponenteContext)
    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <h1>Componente 1</h1>
            <button onClick={()=> setQtdClick(qtdClick+1)}>Click para adicionar na contagem</button>
            
           
        </div>
    )
   
 }



// nossos elementos filhos agora não recebem props elas serão passadadas através do hook useContext
export function Componente2(){
    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <p>1.1 Componente 2</p>
            <Componente3 />
        </div>
    )

}

// o componente 3 usa a quantidade de clicks através da passagem de valores pelo contexto para utilizar como referência para somar 10, através de um outro controle de estado. 

export function Componente3(){
    const {qtdClick} = useContext(ComponenteContext)

    let [click10, setClick10]= useState(qtdClick)

    function handeSetClick(){
        //testa antes de adiconar valor
        if(qtdClick===0){
            setClick10(0)
        }
        else{
        // caso o valor seja diferente de 0 fará a soma de 10
            setClick10(qtdClick+10)
        }
    }

    //usando a qtdClicks como um array de depedências para executar a função que altera o estado do click10 apenas quando o qtdClick tiver seu valor alterado
    useEffect(handeSetClick,[qtdClick])

    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <p>1.2 Componente 3</p>
            <p>Somo 10 nos clicks = {click10}</p>
            <Componente4 />
        </div>
    )

}

export function Componente4(){
    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <p>1.3 Componente 4</p>
            <Componente5 />
        </div>
    )

}

// o componente 5 apenas mostra a quantidade de clicks
export function Componente5(){

    const {qtdClick} = useContext(ComponenteContext)
    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <p>1.4 Componente 5</p>
            <p>Conteúdo do componente mais interno</p>
            <p>{qtdClick}</p>
        </div>
    )

}