import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import Habilidades from './containers/Habilidades'
import Servicos from './containers/Servicos'
import Projectos from './containers/Projectos'
import Contato from './containers/Contato'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <Sobre />
        <Servicos />
        <Habilidades />
        <Projectos />
        <Contato />
      </Container>
    </>
  )
}

export default App
