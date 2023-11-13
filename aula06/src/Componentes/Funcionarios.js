import {useState} from 'react'

export default function Funcionario(props){
  return(
    <div style={{border: '1px solid black', margin:'5px'}}>
        <p> Nome: {props.nome} </p>
        <p> Email: {props.email} </p>
        <p> Telefone: {props.telefone} </p>
    </div>
  )
}