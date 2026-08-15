import { useState } from 'react';
import '../App.css'
import * as serviceTask from '../service/task.service'

function TarefaForm(){
    const [nameTask, setNameTask] = useState('')


    return(
        <>
        <form onSubmit={
            () => {serviceTask.addTask(nameTask)}
        } className='Form'>
            <input onChange={
                (evento) => {setNameTask(evento.target.value)}
            } placeholder='Adicionar tarefa'/>
            <button className='btn-Form'> Adiciona tarefa </button>
        </form>
        </>
    )
}

export default TarefaForm;