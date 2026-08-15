import { useState } from 'react';
import '../App.css'

function TarefaForm(){
    const [nameTack, setNameTack] = useState('')

    function CreatTask(){
        localStorage.setItem("task", nameTack)
    }
    return(
        <>
        <form onSubmit={CreatTask} className='Form'>
            <input onChange={
                (evento) => {setNameTack(evento.target.value)}
            } placeholder='Adicionar tarefa'/>
            <button className='btn-Form'> Adiciona tarefa </button>
        </form>
        </>
    )
}

export default TarefaForm;