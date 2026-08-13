import { useState } from "react"
import './Conteudo.css'

function Conteudo(){
    
    const [Saiba, setSaiba] = useState("")

    function ClickButton(){
        setSaiba("Sou desenvolvedor web focado no momento em full-stac, apaixonado por vitoria")
    }

    return(
        <>
            <main className="Pricipal">
                <h2>Meu nome é Matheus Gomes</h2>
                <h3>Sou Desenvolvedor & psicologo</h3>
                <a href="https://github.com/Math-aMalafaia/Estudando-React">Github</a>

                
                
                <button className="SaibaMais" onClick={ClickButton}>
                    Saiba mais
                </button>
                
                <div className="Card-SaibaMais">
                    <p>
                        {Saiba}
                    </p>
                </div>
                
            </main>
        </>
    )
}

export default Conteudo