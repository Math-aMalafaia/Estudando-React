import '../App.css'
import TarefaForm from './TarefaForm';
import TarefaList from './TarefaList';

function Tarefas(){
    return(
        <>
            <div className='Tarefas'>
                <TarefaForm/>
                <TarefaList/>
            </div>
        </>
    )
}

export default Tarefas;