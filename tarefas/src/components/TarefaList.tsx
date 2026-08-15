import '../App.css'
import Tarefas from './Tarefas';

function TarefaList(){
    let list = ["FAzer tarefas", "Estudas proramação", "Estudar"]
    return(
        <>
            <ul>
                {
                    list.map((listTask) => {
                        return <li> {listTask} </li>
                    })
                }
            </ul>
        </>
    )
}

export default TarefaList;