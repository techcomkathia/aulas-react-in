import { useNavigate, useParams } from "react-router-dom"

let usuarios = [
    {
        id:1,
        nome: 'Ana Maria',
        email:'anamaria@email.com',
        senha:'123ana'
    },
    {
        id:2,
        nome: 'Laura',
        email:'laura@email.com',
        senha:'456laura'
    },
    {
        id:3,
        nome: 'Pedro',
        email:'pedro@email.com',
        senha:'123456'
    }
]


export function TodosUsuarios(){
    
    let navigate = useNavigate()

    function handleclick({usuario}){
        navigate(`/usuarios/${usuario.id}`)
    }

    return (
      <div>
        <h1>Todos os Usuários</h1>
        <ul>
          {usuarios.map((usuario) => (
            <div key={usuario.id} onClick={()=>handleclick({usuario})}>
              <p>Nome: {usuario.nome}</p>
            </div>
          ))}
        </ul>
      </div>
    );
};

export function DetalhesUsuario(){
    const {id} = useParams()
    const usuario = usuarios.find((usuario)=> usuario.id === Number(id))

    return(
        <div>
            <h3>Nome: {usuario.nome}</h3>
            <h3>Email: {usuario.email}</h3>
            <h3>senha: {usuario.senha}</h3>
        </div>
    )  

}