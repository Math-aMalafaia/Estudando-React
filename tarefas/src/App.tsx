import { Routes, Route } from 'react-router-dom'
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
        <Routes>
          <Route path='/' element={<Tarefas/>}> </Route>
          <Route path='/completas' element={<Tarefas/>}> </Route>
          <Route path='/favoritas' element={<Tarefas/>}> </Route>
        </Routes>
      </section>
      
    </div>
    </>
  )
}

export default App
