import "./Header.css"

function Header(){
  return (
    <>
    <header className="Header">
      <h1>Matheus Gomes</h1>
      <ul className="Menu">
        <li> <a href=""> Home </a> </li>
        <li> <a href=""> Sobre mim </a> </li>
        <li> <a href=""> Projetos </a> </li>
      </ul>
    </header>
    </>
  )
}

export default Header