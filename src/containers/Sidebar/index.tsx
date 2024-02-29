import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import Avatar from '../../components/Avatar'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo>Sdney Fernandes</Titulo>
      <Paragrafo tipo="Secundario" fontSize={16}>
        SdneyFernandes
      </Paragrafo>
      <Descricao tipo="Principal">Desenvolvedor Java</Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
