import { Delete, RadioButtonChecked, RadioButtonUnchecked, Star, StarBorder } from '@mui/icons-material';
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
                                <section onClick={
                                    () => {
                                        serviceTask.reverseFull(listTask.id, setTask)
                                    }
                                } className='listText'>
                                    {
                                        listTask.full == true ?
                                            <RadioButtonChecked></RadioButtonChecked>
                                            :
                                            <RadioButtonUnchecked></RadioButtonUnchecked>
                                    }
                                    <span> {listTask.title} </span>
                                </section>
                                <section className='listAction'>
                                    <div onClick={
                                        () => {
                                            serviceTask.ReverseStar(listTask.id, setTask)
                                        }
                                    }>
                                        {
                                            listTask.star == true ?
                                            <Star></Star>
                                            :
                                            <StarBorder></StarBorder>
                                        }
                                    </div>
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