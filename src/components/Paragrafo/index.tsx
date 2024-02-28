import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'Principal' | 'Secundario'
}
const Paragrafo = ({ children, tipo = 'Principal' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Paragrafo
