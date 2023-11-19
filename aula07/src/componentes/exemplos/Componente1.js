import {useState} from 'react'

// nossos componentes vão funcionar como uma boneca matrioska
// o componente1 passas as propriedades (estado) para seus filhos
// que passam para seus filhos
// dessa forma o componente5 tem acesso as propriedades do seu "tataravô"

// esses componentes originalmente seriam definidos em arquivos diferentes
// mas para uma melhor compreensão estão todos definidos dentro do arquivo
// do componente pai


export default function Componente1(){
    let [qtdClick, setQtdClick] = useState(0)

    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <h1>Componente 1</h1>
            <button onClick={()=> setQtdClick(qtdClick+1)}>Click para adicionar na contagem</button>
            <Componente2 numero={qtdClick}/>
        </div>
    )

}

export function Componente2({numero}){
    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <p>1.1 Componente 2</p>
            <Componente3 numero={numero}/>
        </div>
    )

}

export function Componente3({numero}){
    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <p>1.2 Componente 3</p>
            <Componente4 numero={numero}/>
        </div>
    )

}

export function Componente4({numero}){
    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <p>1.3 Componente 4</p>
            <Componente5 numero={numero}/>
        </div>
    )

}

export function Componente5({numero}){
    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <p>1.4 Componente 5</p>
            <p>Conteúdo do componente mais interno</p>
            <p>{numero}</p>
        </div>
    )

}