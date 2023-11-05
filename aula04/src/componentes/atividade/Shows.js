import React, { useState, useEffect } from 'react';

// Crie um select com duas opções
// para ordenar os eventos, uma
// por datas crescentes e datas
// decrescentes. Adicione o valor
// em um state;

// Crie um useEffect que irá
// ordenar a lista de eventos
// sempre que o valor do select
// mudar.

export default function Show(){

    const  shows=[
        {
            nome: "Festival de Música Lírica Eletônica",
            data: "2023/12/25",
            url: "https://placehold.co/300x200"
        },
        {
            nome: "É o Tchan na Selva: Cover",
            data: "2023/05/25",
            url: "https://placehold.co/300x200"
        },
        {
            nome: "Tributo a Ednaldo Pereira",
            data: "2023/10/01",
            url: "https://placehold.co/300x200"
        }
    ]
    
    const style={
       container:{
            display: "flex",
            justifyContent: 'space-between',
            padding: "10px"
        },
        cartao:{
            maxWidth: '300px',
            backgroundColor: "#708090",
            padding: "10px", 
            textAlign: "center",
            borderRadius: "20px"
    
        },
        imagem:{
            margim: "10px", 
            borderRadius: "20px"
        },
        titulo:{
            color: "#113d63",
            textAlign: "center"
        },
        data:{
            color: "#ffffff"
        }
    
        
    }

    const [ordem, setOrder] = useState("crescente"); // State para armazenar a ordem de ordenação

    const showsOrdenados = [...shows]; // Faça uma cópia da lista original de eventos

    if (ordem === "crescente") {
        showsOrdenados.sort((a, b) => new Date(a.data) - new Date(b.data)); // Ordena por datas crescentes
    } else {
        showsOrdenados.sort((a, b) => new Date(b.data) - new Date(a.data)); // Ordena por datas decrescentes
    }

    return (
        <div>
            <div>
                <label htmlFor="orderSelect">Ordenar por:</label>
                <select id="orderSelect" onChange={(e) => setOrder(e.target.value)}>
                    <option value="crescente">Data Crescente</option>
                    <option value="descescente">Data Decrescente</option>
                </select>
            </div>
            <div style={style.container}>
                {showsOrdenados.map((item, index) => (
                    <div key={index} style={style.cartao}>
                        <img style={style.imagem} src={item.url} alt={item.nome} />
                        <h2 style={style.titulo}>{item.nome}</h2>
                        <h3 style={style.data}>{item.data}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

  