// export default function Mensagem(props){
//     return(
//         <>
//         <button onClick={()=>console.log(props.mensagem)}>
//             {props.children}
//         </button>    
//         </>
//     )
    
// }


export default function Mensagem(props){
    function handleClick(){
        console.log(props.mensagem)
    }
    return(
        <>
        <button onClick={handleClick}>
            {props.children}
        </button>    
        </>
    )
    
}

