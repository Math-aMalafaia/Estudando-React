import { Delete, RadioButtonChecked, Star } from '@mui/icons-material';
import '../App.css'
import { useEffect, useState } from 'react';
import * as serviceTask from '../service/task.service'

function TarefaList(){
    const [task, setTask] = useState([])
    useEffect(() => {
        setTask(serviceTask.takeTask())
    }, [])

    const list = ["FAzer tarefas", "Estudas proramação", "Estudar", "Encontra victoria"]

    return(
        <>
            <ul className='List'>
                {
                    task.map((listTask) => {
                        return(
                            <li className='listCheck'>
                                <section className='listText'>
                                    <RadioButtonChecked></RadioButtonChecked>
                                    <span> {listTask.title} </span>
                                </section>
                                <section className='listAction'>
                                    <div><Star></Star></div>
                                    <div><Delete></Delete></div>
                                </section>
                            </li>
                        ) 
                    })
                }
            </ul>
        </>
    )
}

export default TarefaList;