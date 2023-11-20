import {useState, createContext, useContext, useEffect} from  'react'


export const ConversorMoedasContext = createContext(0)

export default function ConversorMoedas(){
   
    let[real, setReal]= useState(0)
 
    return(
        <>
        <ConversorMoedasContext.Provider value={{real, setReal}}>
            <EntradaMoedas/> 
            <MoedaDolar/> 
        </ConversorMoedasContext.Provider>
        </>
    )
}



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


export function  MoedaDolar(){
    let {real}= useContext(ConversorMoedasContext)

    let [convertDolar, setConvertDolar] = useState(0)
    let cotacaoDolar = 5.70

    useEffect(
        ()=> setConvertDolar(real/cotacaoDolar),
        [real]
    )

   return(
    <div style={{border: '1px sold red', margin:'5px', padding:'10px'}}>
        <h1>Dolar</h1>
        <p> Cotação: {cotacaoDolar}</p>
        <p> Valor em Real:{real}</p>
        <p> Valor convertido: {convertDolar}</p>
    </div>
   )

}