import { useContext, useEffect, useState } from "react";

import ConversorMoedasContext from "./ConversorMoedasContexto";

export default function  MoedaDolar(){
    let {real}= useContext(ConversorMoedasContext)

    let [convertDolar, setConvertDolar] = useState(0)
    let cotacaoDolar = 5.70

    useEffect(
        ()=> setConvertDolar(real/convertDolar),
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