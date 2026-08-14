import Header from './components/Header/Header'
import Conteudo from './components/Conteudo/Conteudo'
import Project from './components/Project/Project'
import './App.css'

function App() {
  return (
    <> 
      <div className="pricipal">
        
      <Header/>
      <Conteudo />
      <Project />
      <footer className='Footer'> 
        <p>Feito por Matheus Gomes</p>
      </footer> 
    </div>
    </>
  )
}



export default App