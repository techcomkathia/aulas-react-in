export function BotaoAlerta(props){

    function handleAlerta(){
        alert(props.mensagem)
    }


    return(
        <>
        <button onClick={handleAlerta}>
            {props.children}
        </button>
        </>
    )
}

