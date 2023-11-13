import { useNavigate } from "react-router-dom";
import { DetalhesUsuario } from "../Componentes/Usuarios";

export default function UsuarioDetalhes(){
    let navigate= useNavigate()

    return(
        <div>
            <DetalhesUsuario/>
            <button onClick={()=>navigate('/usuarios')}>Voltar</button>
        </div>
    )
}