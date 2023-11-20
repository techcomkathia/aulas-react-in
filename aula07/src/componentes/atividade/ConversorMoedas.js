import {useState, createContext, useContext, useEffect} from  'react'
import { ConversorMoedasContext } from './ConversorMoedasContexto'
import { EntradaMoedas } from './EntradaMoedas'
import { MoedaDolar } from './MoedaDolar'


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




