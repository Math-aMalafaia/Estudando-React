import { Delete, RadioButtonChecked, Star } from '@mui/icons-material';
import '../App.css'


function TarefaList(){
    const list = ["FAzer tarefas", "Estudas proramação", "Estudar", "Encontra victoria"]
    localStorage.getItem('task')
    return(
        <>
            <ul className='List'>
                {
                    list.map((listTask) => {
                        return(
                            <li className='listCheck'>
                                <section className='listText'>
                                    <RadioButtonChecked></RadioButtonChecked>
                                    <span> {listTask} </span>
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