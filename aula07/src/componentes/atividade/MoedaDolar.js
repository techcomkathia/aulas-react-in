import { useContext, useEffect, useState } from "react";

import { ConversorMoedasContext } from "./ConversorMoedasContexto";

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
        <p> Cotação: US$ 1.00 - R${cotacaoDolar.toFixed(2)}</p>
        <p> Valor em Real: R${real.toFixed(2)}</p>
        <p> Valor convertido: US$ {convertDolar.toFixed(2)}</p>
    </div>
   )

}