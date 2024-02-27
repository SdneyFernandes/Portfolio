import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Projectos from './containers/Projectos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projectos />
        </main>
      </Container>
    </>
  )
}

export default App
