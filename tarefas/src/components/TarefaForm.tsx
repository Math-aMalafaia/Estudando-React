import '../App.css'

function TarefaForm(){
    return(
        <>
        <form className='Form'>
            <input placeholder='Adicionar tarefa'/>
            <button className='btn-Form'> Adiciona tarefa </button>
        </form>
        </>
    )
}

export default TarefaForm;