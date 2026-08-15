import '../App.css'

function Sidebar(){
    return(
        <>
            <nav className="Nav">
                <button className='btn'>Todos</button>
                <button className='btn'>Completas</button>
                <button className='btn'>Favoritas</button>
            </nav>
        </>
    )
}

export default Sidebar;