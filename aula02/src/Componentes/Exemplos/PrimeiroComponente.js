
export default function PrimeiroComponente(){
    const nome = 'Káthia'

    return(
        <div> 
            {/* ao exportar mais de uma tag com JSX devemos envelopar em um único componente. Neste caso usamos uma tag div para agrupar os demais elementos html*/}
            <h1>Aprendendo JSX</h1>
            <h2>Olá, me chamo {nome}</h2>
            <p>Esse é um parágrafo que é o resultado a soma de dois números: 2 + 2 = {2+2}</p>
            {console.log('Escrevendo no console via react')}
            {/* Comentários em um JSX*/}
        </div>
    )
}