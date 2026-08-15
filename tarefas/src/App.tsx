import './App.css'
import Sidebar from './components/Sidevar'
import Tarefas from './components/Tarefas'
import { CheckCircle } from '@mui/icons-material'


function App() {



  return (
    <>
    <header>
      <h1>Tarefas App</h1>
      <CheckCircle></CheckCircle>
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
