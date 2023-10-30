import { useEffect, useState } from 'react';

function ChamadaApi(){
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const consumirDados = async () => {
            const res = await fetch(url);
            const dados = await res.json();
            setData(dados);
        }
        consumirDados();
    });
    console.log(data);

    return (
        <div>
            <h1>Aplicação consumindo API</h1>
            <p>Olhe no console e veja</p>
        </div>
    );
};

export default ChamadaApi;