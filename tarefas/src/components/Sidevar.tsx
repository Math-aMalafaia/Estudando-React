import '../App.css'
import ButtonSidbar from './Botao';

function Sidebar(){
    return(
        <>
            <nav className="Nav">
                <ButtonSidbar buttonName="todas" icon="CheckBoxRounded" rota="/"></ButtonSidbar>
                <ButtonSidbar buttonName="Completas" icon="Check" rota="/completas"></ButtonSidbar>
                <ButtonSidbar buttonName="favoritas" icon="Star" rota="/favoritas"></ButtonSidbar>
            </nav>
        </>
    )
}

export default Sidebar;