import { useState } from 'react';
import '../App.css'
import * as serviceTask from '../service/task.service'

function TarefaForm(){
    const [task, setTask] = useState({
        title: '',
        ful: false,
        favorite: false,
        ID: ''
    })


    return(
        <>
        <form onSubmit={
            () => {serviceTask.addTask(task)}
        } className='Form'>
            <input onChange={
                // esse comando muda apenas o title da task
                (evento) => {setTask({...task, title: evento.target.value})}
            } placeholder='Adicionar tarefa'/>
            <button className='btn-Form'> Adiciona tarefa </button>
        </form>
        </>
    )
}

export default TarefaForm;