// Renderização condicional

function TesteRender(profissao) {

    let teste = profissao.toLowerCase()
    {/*Converter para lower case para tratar as entradas*/}

    if (teste === "programador" || teste === "dev" || teste === "professor") {
      return <h3>Você não tem vida social!</h3>
    }
    else {
      return <h1>Você é feliz!</h1>
    }
}

export default TesteRender