import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Images from './Components/Images'
import Form from './Components/Form'
import List from './Components/List'

function App() {
  return (
    <>
      <head>

      </head>
      <body>
        {/* {<!-- Cabeçalho -->} */}
          <Header titulo ="Página em React"/>
        {/* <!-- Conteudo da pagina --> */}
        <main>
          <List titulo="aipim" exibirPrimeiraLista /> 
          <List titulo="batata"/>
          <Images/>
          <Form/>
        </main>
        <Footer/>
      </body>
    </>
  )
}

export default App
