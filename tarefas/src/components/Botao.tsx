import { Check, CheckBoxRounded, Star } from "@mui/icons-material";
import { Link } from "react-router-dom";


function ButtonSidbar({ buttonName, icon, rota }){

    let icone;

    if(icon == "CheckBoxRounded"){
        icone = <CheckBoxRounded/>
    } else if (icon == "Check"){
        icone = <Check/>
    } else {
        icone = <Star/>
    }
    return(
        <>
            <button className='btn'>
                <Link className="link-btn" to={rota}>
                    {icone}
                    {buttonName}
                </Link>
            </button>
        </>
    )
}

export default ButtonSidbar;