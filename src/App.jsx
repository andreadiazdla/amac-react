import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />

      <main id="principal" className="principal">
        <div className="contenedor">
          <h1>Bienvenido a AMAC</h1>
          <p>Estamos construyendo nuestra plataforma.</p>
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App