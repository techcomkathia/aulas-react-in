import { useState, useEffect } from "react";

// toda vez que há uma alteração de estado da aplicação o useEffect dispara a função que é passada como callback para ele 

export default function ContadorSegundos() {
    const [segundos, setSegundos] = useState(0);
  
    useEffect(() => {
      setTimeout(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    });
  
    return <h1>Estou renderizando novamente a {segundos} segundos!</h1>;
  }