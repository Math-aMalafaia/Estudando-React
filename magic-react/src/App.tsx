import Header from './components/Header/Header'
import Conteudo from './components/Conteudo/Conteudo'
import Project from './components/Project/Project';
import './App.css'
import { useState } from 'react'

function App() {
  const[project, setProject] = useState([
    {GitHUb: 'httpd://github.com', caminhoimg: 'src/assets/facebook.png'},
    {GitHUb: 'httpd://github.com', caminhoimg: 'src/assets/tesla.png'},
    {GitHUb: 'httpd://github.com', caminhoimg: 'src/assets/vite.png'}
  ])
  return (
    <> 
      <div className="pricipal">
        
      <Header/>
      <Conteudo />
      <Project project={project}/>
      <footer className='Footer'> 
        <p>Feito por Matheus Gomes</p>
      </footer> 
    </div>
    </>
  )
}



export default App