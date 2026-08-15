import { useState } from 'react';
import '../App.css'

function TarefaForm(){
    const [nameTack, setNameTack] = useState('')

    function CreatTask(){
        
        const oldTask = JSON.parse(localStorage.getItem("task")) || []
        const oldTaskNewTask = [...oldTask, nameTack]
        const newTask = JSON.stringify(oldTaskNewTask)
        localStorage.setItem("task", newTask)
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