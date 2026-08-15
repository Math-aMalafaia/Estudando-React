import './App.css'
import Sidebar from './components/Sidevar'
import Tarefas from './components/Tarefas'


function App() {
  return (
    <>
    <header>
      <h1>Tarefas App</h1>
    </header>
    <div className='Conteiner'>
      <Sidebar/>
      <section className='Conteudo'>
        <Tarefas/>
      </section>
    </div>
    </>
  )
}

export default App
