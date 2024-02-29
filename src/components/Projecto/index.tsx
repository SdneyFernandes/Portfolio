import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projecto = () => {
  return (
    <Card>
      <Titulo>Projecto Lista de tarefa</Titulo>
      <Paragrafo tipo="Secundario">Lista de tarefas feita com VueJs</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projecto
