import './QuartoComponente.css'

// Os estilos podem ser definidos em uma variável, no formato de Objetos 
const estilo = { 
    // dentro das variáveis o comentário seguem a mesma notação do comentário em um arquivo .js
    backgroundColor: "navy",
    // as propriedades utilizam a escrita em camelCase
    color: "yellow",
    fontWeight: "bold",
    fontSize: "25px"
};

//podemos utilizar um arquivo css externo fazendo o import.
//os imports são feitos logo no início do arquivo, antes de qualquer código

function QuartoComponente(){
    return(
        <>
            {/* Trabalhando com estilos dentro dos componentes*/}
            <p style={estilo}>
                Estilizando css inline
            </p>
            <p className="teste">Trabalhando com class no JSX</p>
        </>
    )
}

// podemos exportar as funções no final do arquivo também
export default QuartoComponente