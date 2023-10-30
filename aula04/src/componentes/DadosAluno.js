// uso do useState e dos eventos em formulários
import {useState} from 'react'



export function DadosAluno(){
    let lista=[
        {id:1, nome:'Ana', curso:' Fotografia'},
        {id:2, nome:'Paulo', curso: 'DATA'}
    ]


    let [nome, setNome]= useState('')
    let [curso, setCurso]= useState('')
    let [alunos, setAlunos]= useState(lista)
    let [id, setId]= useState(alunos.length+1)

    function handleChangeNome(e){
        setNome(e.target.value)
    }

    function handleChangeCurso(e){
        setCurso(e.target.value)
    }

    function cadastrarAluno(){
             
        setId(id+1)
        let aluno = {'id': id,'nome': nome, 'curso': curso}
        setAlunos([...alunos, aluno])
        setNome(" ")
        setCurso(" ")
    }



    return(

        <div>

            <div>
                <h1>Cadastro de alunos</h1>
                <form onSubmit={(e)=>e.preventDefault()}>
                <label>Nome:</label>
                <input onChange={(e)=>handleChangeNome(e)} value={nome}></input>
                <br/>
                <label>Curso:</label>
                <input onChange={(e)=>handleChangeCurso(e)} value={curso}></input>
                <br/>
                <input type="submit" value="cadastrar" onClick={cadastrarAluno}/>
                </form>    
            </div>

            <div>
                <h1> Dados dos Alunos </h1>
                {alunos.map((aluno)=>(
                    
                    <div key={aluno.id} style={{border:"1px solid red", margin:"10px"}}>
                        <p>Nome: {aluno.nome}</p>
                        <p>Curso: {aluno.curso}</p>
                        <p>Id: {aluno.id}</p>
                    </div>

                ))}    
            </div>
            {console.log('fui renderizado')}
                 
            
                      
        </div>
        

        

    )
}