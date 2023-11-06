import { useNavigate } from "react-router-dom";
import { DetalhesUsuario } from "../Componentes/Usuarios";

export default function UsuarioDetalhes(){
    let navigate= useNavigate()

    return(
        <div>
            <DetalhesUsuario/>
            <button onClick={()=>navigate(-1)}>Voltar</button>
        </div>
    )
}