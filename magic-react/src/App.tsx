function App() { 
  let texto = "ola mundo  "
  let caminhoimg = "src/assets/vite.svg"
  return (
    <>
      <h1>Magic React</h1>
      <button>
        {texto}
      </button>
      <img src={caminhoimg} alt="" />
      <img src="src/assets/react.svg" alt="" />

      <h1>
      </h1>
    </>
  )
}



export default App