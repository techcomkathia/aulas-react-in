export function Comp1(){

    let [qtdClick, setQtdClick] = useContext(ComponenteContext)
    
    return(
        <div style={{border: '1px solid red', padding:'10px', margin:'10px'}}>
            <h1>Componente 1</h1>
            <button onClick={()=> setQtdClick(qtdClick+1)}>Click para adicionar na contagem</button>
            <Componente2/>
        </div>
    )
   
 }
