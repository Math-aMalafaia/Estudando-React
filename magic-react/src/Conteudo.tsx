function Conteudo(){

    function ClickButton(){
        alert("Parabéns você clicou no botão")
    }

    const ClickButton2 = () => {
        alert("Parabéns você clicou no segundo Botão")
    }

    let Nome = "Sem nada"
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

                <button onClick={
                    () => {
                        Nome = "Parabéns você clicou no quarto botão"
                    }
                }>
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
            </main>
        </>
    )
}

export default Conteudo