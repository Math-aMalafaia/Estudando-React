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
                <section className="pricipal-text">
                    
                    <h2 className="Pricipal-intro">Meu nome é Matheus Gomes</h2>
                    <h3>Sou Desenvolvedor & psicologo</h3>
                    
                    
                    <button className="SaibaMais" onClick={ClickButton}>
                        Saiba mais
                    </button>
                    
                    <div className="Card-SaibaMais">
                        <p>
                            {Saiba}
                        </p>
                    </div>
                </section>
                <img className="Pict" src="src/assets/programmer.png" alt="" />
            </main>
        </>
    )
}

export default Conteudo