import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'Principal' | 'Secundario'
  fontSize?: number
}
const Paragrafo = ({ children, tipo = 'Principal', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Paragrafo
