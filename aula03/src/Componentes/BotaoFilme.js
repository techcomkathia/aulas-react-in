function BotaoFilme({funcao, children}){
    return(
        <button onClick={funcao}>
            {children}
        </button>
    )
}

function ClickBotao({nomeFilme}){
    
    function handleClick(){
        alert (`Assistindo ${nomeFime}!`)
    }

    return(
        <BotaoFilme funcao={handleClick}>
            Play "{movieName}"
        </BotaoFilme>
    )
}