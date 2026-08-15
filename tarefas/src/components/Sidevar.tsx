import { Check, CheckBoxRounded, Star } from '@mui/icons-material';
import '../App.css'

function Sidebar(){
    return(
        <>
            <nav className="Nav">
                <button className='btn'>
                    <section>
                        <CheckBoxRounded></CheckBoxRounded>
                        Todos
                    </section>
                </button>
                <button className='btn'>
                    <section>
                        <Check></Check>
                        Completas
                    </section>
                </button>
                <button className='btn'>
                    <section>
                        <Star></Star>
                        Favoritas
                    </section>
                </button>
            </nav>
        </>
    )
}

export default Sidebar;