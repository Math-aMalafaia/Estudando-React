import "./Header.css"

function Header() {
let Links = [
    {href: "https://google.com", Nome: "Home"},
    {href: "https://youtube.com", Nome: "Sobre Mim"},
    {href: "https://facebook.com", Nome: "Projetos"}
  ]
  return (
    <>
    <header className="Header">
      <h1>Matheus Gomes</h1>
        <ul className="Menu">
          {
            Links.map((LinksNow) => {
              return <li> <a href={LinksNow.href}> {LinksNow.Nome} </a>  </li>
            })
          }
      </ul>
    </header>
    </>
  )
}

export default Header