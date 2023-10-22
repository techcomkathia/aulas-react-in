{/* Trabalhando com props */}


export default function TerceiroComponente(props){
    {/* o fragment <></> funciona como uma div. Tem a capacidade de envelopar vários elementos, porém não adiciona um novo nó no DOM */}
    return( <>
        <h1> Informações</h1>
        <p>Nome: {props.nome}</p> {/* acessa o atributo 'nome' definido na tag de abertura do componente*/}
        <p>Idade: {props.idade}</p> {/* acessa o atributo 'idade' definido na tag de abertura do componente*/}
    </>)
}
