import { useState } from 'react';

const Calculadora = () => {
    const [valor1, setValor1] = useState(0);
    const [valor2, setValor2] = useState(0);
    const [resultado, setResultado] = useState("");
    
    
    function handleValor1 (e) {
        setValor1(Number(e.target.value));
    }

    const handleValor2 = (e) => {
        setValor2(Number(e.target.value));
    }

    const handleCalcular = (e) => {
        setResultado(valor1 + valor2);

        // Resetando os estados
        setValor1(0);
        setValor2(0);
    }

    return (
        <div>
            <label>
                <h1>Calculadora</h1>
                <p>Aprendendo a usar eventos em formulários</p>
                Valor 1:
                <input type="number" onChange={(e)=>handleValor1(e)} 
                value={valor1}/>
                {/* envelopando a função handleValor1 em uma arrow function, pois ela precisa receber um parâmetro  */}
            </label>

            <br />

            <label>
                Valor 2:
                <input type="number" onChange={handleValor2}
                value={valor2}/>
                {/* passando a variável handleValor2 que guarda uma arrow function */}
            </label>

            <br />
            <button onClick={handleCalcular}>Somar</button>
            {/* passando a variável handleCalcular que guarda uma arrow function */}

            <h3>Resultado = {resultado}</h3>
        </div>
    );
};

export default Calculadora;