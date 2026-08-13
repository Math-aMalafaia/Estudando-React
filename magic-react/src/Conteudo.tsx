import { useState } from "react"

function Conteudo(){

    function ClickButton(){
        alert("Parabéns você clicou no botão")
    }

    const ClickButton2 = () => {
        alert("Parabéns você clicou no segundo Botão")
    }
    const [Nome, setNome] = useState("Sem nada")
    const [Valor, setValor] = useState(0)
    
    function ClickButton3(){
        setNome("Parabéns você clicou no quarto botão")
        setValor(Valor + 1)
    }
    return(
        <>
            <main>
                <h2>Meu nome é Matheus Gomes</h2>
                <h3>Sou Desenvolvedor & psicologo</h3>
                <a href="https://github.com/Math-aMalafaia/Estudando-React">Github</a>

                
                
                <button onClick={ClickButton}>
                    Clique para mostrar Matheus Gomes
                </button>
                
                <button onClick={ClickButton2}>
                    Clique para mostrar Matheus Gomes
                </button>
                
                <button onClick={
                    () => {
                        alert("Parabéns você clicou no terceiro botão")
                    }
                }>
                    Clique para mostrar Matheus Gomes
                </button>

                <button onClick={ClickButton3}>
                    Clique para mostra Matheus Gomes
                </button>

                <button onMouseOver={
                    () => {
                        alert("Mouse por cima do botão")
                    }
                } >
                    Clique para mostra Matheus Gomes
                </button>

                <p>
                    {Nome}
                </p>
                <h2>
                    {Valor}
                </h2>
            </main>
        </>
    )
}

export default Conteudo